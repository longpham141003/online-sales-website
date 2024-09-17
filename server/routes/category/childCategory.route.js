const express = require('express');
const { auth, authorize } = require('../../middlewares/auth');
const router = express.Router();
const {
  getChildCategories,
  getChildCategory,
  createChildCategory,
  updateChildCategory,
  deleteChildCategory,
  getChildCategoriesByParentId
} = require('../../controllers/category/childCategory.controller.js');

// Route cho phép tất cả người dùng xem danh mục phụ
router.get('/', getChildCategories);
router.get('/:id', getChildCategory);
router.get('/by-parent/:parentId', getChildCategoriesByParentId);

// Các route cần quyền admin
router.post('/', auth, authorize('admin'), createChildCategory);
router.put('/:id', auth, authorize('admin'), updateChildCategory);
router.delete('/:id', auth, authorize('admin'), deleteChildCategory);

module.exports = router;
