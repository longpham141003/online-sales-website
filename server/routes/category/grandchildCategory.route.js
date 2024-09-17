const express = require('express');
const { auth, authorize } = require('../../middlewares/auth');
const router = express.Router();
const {
  getGrandchildCategories,
  getGrandchildCategory,
  createGrandchildCategory,
  updateGrandchildCategory,
  deleteGrandchildCategory,
  getByChildId
} = require('../../controllers/category/grandchildCategory.controller.js');

// Route cho phép tất cả người dùng xem danh mục chi tiết
router.get('/', getGrandchildCategories);
router.get('/:id', getGrandchildCategory);
router.get('/by-child/:childId', getByChildId);

// Các route cần quyền admin
router.post('/', auth, authorize('admin'), createGrandchildCategory);
router.put('/:id', auth, authorize('admin'), updateGrandchildCategory);
router.delete('/:id', auth, authorize('admin'), deleteGrandchildCategory);

module.exports = router;
