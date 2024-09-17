import React from "react";
import '../../../assets/css/user/order-success.css';

const OrderSuccess = () => (
  <div className="success-message" data-aos="fade-up">
    <div className="success-icon">
      <i className="fas fa-check-circle" />
    </div>
    <div className="success-text">Chúc mừng bạn đã đặt hàng thành công!</div>
    <div className="success-subtext">
      Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.
    </div>
    <div className="success-actions">
      <a href="/xem-don-hang" className="btn btn-primary">
        Xem đơn hàng của bạn
      </a>
      <a href="/tiep-tuc-mua-sam" className="btn btn-secondary">
        Tiếp tục mua sắm
      </a>
    </div>
  </div>
);

export default OrderSuccess;
