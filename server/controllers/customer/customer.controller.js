const Order = require('../../models/order/order.model.js');
const User = require('../../models/user/user.model.js');

const getAllCustomers = async (req, res) => {
  try {
      // Lấy tất cả đơn hàng và populate thông tin người dùng
      const orders = await Order.find({})
          .populate({
              path: 'user',
              select: 'userCode hoTen soDienThoai' // Chọn các trường cần thiết từ User model
          });

      // Tạo bản đồ để chứa thông tin khách hàng
      const customerMap = {};

      orders.forEach(order => {
          const user = order.user;
          if (user) {
              if (!customerMap[user._id]) {
                  customerMap[user._id] = {
                      userCode: user.userCode || 'Chưa có mã',
                      hoTen: user.hoTen || 'Chưa có tên',
                      soDienThoai: user.soDienThoai || 'Chưa có số điện thoại',
                      orderCount: 0, // Khởi tạo số đơn hàng
                      lastPurchase: new Date(order.createdAt) // Thời gian mua hàng gần nhất
                  };
              }
              // Cập nhật số lượng đơn hàng và thời gian mua hàng gần nhất
              customerMap[user._id].orderCount += 1;
              if (new Date(order.createdAt) > customerMap[user._id].lastPurchase) {
                  customerMap[user._id].lastPurchase = new Date(order.createdAt);
              }
          }
      });

      const customerList = Object.values(customerMap);
      res.status(200).json(customerList);
  } catch (error) {
      console.error('Lỗi khi lấy dữ liệu khách hàng:', error.message);
      res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getAllCustomers
};
