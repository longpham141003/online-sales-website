const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Đảm bảo 'User' là tên mô hình chính xác
        required: true
    },
    userCode: {
        type: String,
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    recipientName: {
        type: String,
        required: true
    },
    address: {
        province: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        ward: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        }
    },
    phone: {
        type: String,
        required: true
    },
    note: {
        type: String,
        default: ''
    },
    shippingMethod: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderCode: {
        type: String,
        default: uuidv4,
        unique: true
    },
    shortOrderCode: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
