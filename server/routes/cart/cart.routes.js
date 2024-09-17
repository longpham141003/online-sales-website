const express = require('express');
const router = express.Router();
const { auth } = require('../../middlewares/auth');
const {
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
    getCart
} = require('../../controllers/cart/cart.controller.js');

// Yêu cầu xác thực cho các thao tác giỏ hàng
router.post('/', auth, addToCart);
router.put('/:itemId', auth, updateCartItem);
router.delete('/:itemId', auth, removeCartItem);
router.delete('/', auth, clearCart);
router.get('/', auth, getCart);

module.exports = router;
