// controllers/order.controller.js
const Order = require('../../models/order/order.model.js');
const CartItem = require('../../models/cart/cart.model.js');
const Product = require('../../models/product/product.model.js'); // Thêm vào nếu chưa có

const { v4: uuidv4 } = require('uuid');

const createOrder = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Please log in to create an order' });
        }

        const cartItems = await CartItem.find({ user: req.user._id }).populate('product');

        if (!cartItems.length) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        const items = cartItems.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            color: item.color,
            price: item.price,
            total: item.total
        }));

        const totalAmount = items.reduce((acc, item) => acc + item.total, 0);

        const { recipientName, address, phone, note, shippingMethod, paymentMethod } = req.body;

        const orderCode = uuidv4();
        const shortOrderCode = `DH${Date.now().toString().slice(-3)}`;

        const user = req.user;
        const userCode = user.userCode;

        const order = new Order({
            user: user._id,
            userCode: userCode,
            items,
            totalAmount,
            recipientName,
            address,
            phone,
            note,
            shippingMethod,
            paymentMethod,
            orderCode,
            shortOrderCode
        });

        await order.save();
        await CartItem.deleteMany({ user: req.user._id });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate({
                path: 'items.product',
                select: 'tenSanPham' // Chỉ chọn trường tên sản phẩm
            });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findById(orderId)
            .populate({
                path: 'items.product',
                select: 'tenSanPham' // Chỉ chọn trường tên sản phẩm
            })
            .populate({
                path: 'user',
                select: 'hoTen' // Chỉ chọn trường tên người dùng
            });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate({
                path: 'items.product',
                select: 'tenSanPham' // Chỉ chọn trường tên sản phẩm
            })
            .populate({
                path: 'user',
                select: 'hoTen' // Chỉ chọn trường tên người dùng
            });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrdersByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ user: userId })
            .populate({
                path: 'items.product',
                select: 'tenSanPham' // Chỉ chọn trường tên sản phẩm
            });

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findByIdAndDelete(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getUserOrders,
    getOrderById,
    getAllOrders,
    getOrdersByUserId,
    updateOrderStatus,
    deleteOrder
};
