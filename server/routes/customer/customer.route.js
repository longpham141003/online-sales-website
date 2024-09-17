const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../../middlewares/auth');
const { getAllCustomers } = require('../../controllers/customer/customer.controller.js');

router.get('/', auth, authorize('admin'), getAllCustomers);

module.exports = router;
