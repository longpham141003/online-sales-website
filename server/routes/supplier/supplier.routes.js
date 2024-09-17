const express = require("express");
const router = express.Router();
const { auth, authorize } = require('../../middlewares/auth');
const {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('../../controllers/supplier/supplier.controller.js');

// Các route bảo vệ bởi auth và authorize
router.get('/', auth, authorize('admin'), getSuppliers); // Lấy danh sách tất cả nhà cung cấp
router.get('/:id', auth, authorize('admin'), getSupplier); // Lấy thông tin chi tiết nhà cung cấp theo ID
router.post('/', auth, authorize('admin'), createSupplier); // Tạo mới nhà cung cấp
router.put('/:id', auth, authorize('admin'), updateSupplier); // Cập nhật nhà cung cấp theo ID
router.delete('/:id', auth, authorize('admin'), deleteSupplier); // Xóa nhà cung cấp theo ID

module.exports = router;
