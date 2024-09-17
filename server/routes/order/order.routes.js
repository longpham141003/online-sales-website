const express = require('express');
const router = express.Router();
const { auth, authorize } = require('../../middlewares/auth');
const {
  createOrder,
  getUserOrders,
  getOrderById,
  getAllOrders,
  getOrdersByUserId,
  updateOrderStatus,
  deleteOrder,

} = require('../../controllers/order/order.controller.js');

// Yêu cầu xác thực khi tạo đơn hàng
router.post('/', auth, createOrder);
// Lấy tất cả đơn hàng của người dùng hiện tại
router.get('/', auth, getUserOrders);
// Admin lấy tất cả đơn hàng trong hệ thống
router.get('/all', auth, authorize('admin'), getAllOrders);
// Lấy thông tin chi tiết đơn hàng theo ID (cả user và admin đều có thể xem)
router.get('/:orderId', auth, getOrderById);
// Admin lấy tất cả đơn hàng của một user theo userId và chuyển đổi thành danh sách khách hàng
router.get('/user/:userId', auth, authorize('admin'), getOrdersByUserId);
// Admin cập nhật trạng thái đơn hàng
router.put('/:orderId', auth, authorize('admin'), updateOrderStatus);
// Admin xóa đơn hàng
router.delete('/:orderId', auth, authorize('admin'), deleteOrder);



module.exports = router;
