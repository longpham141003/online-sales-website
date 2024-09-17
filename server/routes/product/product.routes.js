const express = require('express');
const upload = require('../../middlewares/upload');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByGrandchildCategory,
  getProductsBySupplier
} = require('../../controllers/product/product.controller.js');
const { auth, authorize } = require('../../middlewares/auth.js');

// Các route không yêu cầu phân quyền (có thể là public)
router.get('/', getProducts); // Danh sách tất cả sản phẩm
router.get('/:id', getProductById); // Chi tiết sản phẩm
router.get('/by-grandchild-category/:grandchildCategoryId', getProductsByGrandchildCategory); // Sản phẩm theo danh mục con
router.get('/by-supplier/:supplierId', getProductsBySupplier); // Sản phẩm theo nhà cung cấp

// Các route yêu cầu admin quyền
router.post('/', auth, authorize('admin'), upload.single('image'), createProduct); // Tạo sản phẩm
router.put('/:id', auth, authorize('admin'), upload.single('image'), updateProduct); // Cập nhật sản phẩm
router.delete('/:id', auth, authorize('admin'), deleteProduct); // Xóa sản phẩm

module.exports = router;
