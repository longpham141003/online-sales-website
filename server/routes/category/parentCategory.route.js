const express = require('express');
const upload = require('../../middlewares/upload');
const { auth, authorize } = require('../../middlewares/auth');
const router = express.Router();
const {
  getParentCategories,
  getParentCategory,
  createParentCategory,
  updateParentCategory,
  deleteParentCategory,
} = require('../../controllers/category/parentCategory.controller.js');

// Route cho phép tất cả người dùng xem danh mục chính
router.get('/', getParentCategories);
router.get('/:id', getParentCategory);

// Các route cần quyền admin
router.post('/', auth, authorize('admin'), upload.single('image'), createParentCategory);
router.put('/:id', auth, authorize('admin'), upload.single('image'), updateParentCategory);
router.delete('/:id', auth, authorize('admin'), deleteParentCategory);

module.exports = router;
