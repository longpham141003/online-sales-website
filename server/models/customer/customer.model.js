const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    userCode: {
        type: String,
        required: true,
        unique: true
    },
    hoTen: {
        type: String,
        required: true
    },
    soDienThoai: {
        type: String,
        required: true
    },
    lastPurchase: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
