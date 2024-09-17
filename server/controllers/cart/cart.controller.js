const CartItem = require('../../models/cart/cart.model.js');
const Product = require('../../models/product/product.model.js');

const addToCart = async (req, res) => {
    try {
        const { productId, quantity, color } = req.body;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const total = product.giaTienHienTai * quantity;

        // Đảm bảo user đã đăng nhập
        if (!req.user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const userId = req.user._id;

        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
        let cartItem = await CartItem.findOne({ user: userId, product: productId, color: color });

        if (cartItem) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng và tổng giá trị
            cartItem.quantity += quantity;
            cartItem.total = cartItem.price * cartItem.quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
            cartItem = new CartItem({
                user: userId,
                product: productId,
                quantity,
                color,
                price: product.giaTienHienTai,
                total
            });
        }

        await cartItem.save();

        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCartItem = async (req, res) => {
    try {
        const { itemId } = req.params;
        const { quantity } = req.body;

        const cartItem = await CartItem.findById(itemId);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        cartItem.quantity = quantity;
        cartItem.total = cartItem.price * quantity;

        await cartItem.save();

        res.status(200).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeCartItem = async (req, res) => {
    try {
        const { itemId } = req.params;

        const cartItem = await CartItem.findByIdAndDelete(itemId);

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        res.status(200).json({ message: 'Cart item removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const clearCart = async (req, res) => {
    try {
        const userId = req.user._id;
        await CartItem.deleteMany({ user: userId });

        res.status(200).json({ message: 'Cart cleared successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const cartItems = await CartItem.find({ user: userId }).populate('product');

        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    getCart
};
