const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../../middlewares/auth.js');

// Endpoint này chỉ cho phép người dùng có vai trò admin truy cập
router.get('/admin-only', authorize('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome admin!' });
});

// Endpoint này cho phép cả người dùng có vai trò admin và user truy cập
router.get('/user-only', authorize(['admin', 'user']), (req, res) => {
    res.status(200).json({ message: 'Welcome user!' });
});

module.exports = router;
