import React from "react";
import '../../../../assets/css/user/info.css';

const InfoDetail = ({ onClose, order }) => (
  <div id="order-details-modal" className="modal" style={{ display: 'flex' }}>
    <div className="modal-content">
      <span className="close-button" onClick={onClose}>
        ×
      </span>
      <h2>Chi tiết đơn hàng</h2>
      <p>
        <strong>Tên người nhận:</strong> {order.recipientName}
      </p>
      <p>
        <strong>Số điện thoại:</strong> {order.phone}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {order.address.detail}, {order.address.ward}, {order.address.district}, {order.address.province}
      </p>
      <p>
        <strong>Ghi chú:</strong> {order.note}
      </p>
      <p>
        <strong>Phương thức vận chuyển:</strong> {order.shippingMethod}
      </p>
      <h3>Sản phẩm:</h3>
      <table id="order-products-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(item => (
            <tr key={item.product._id}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        <strong>Tổng giá:</strong> ${order.totalAmount.toFixed(2)}
      </p>
      <p>
        <strong>Phương thức thanh toán:</strong> {order.paymentMethod}
      </p>
    </div>
  </div>
);

export default InfoDetail;
