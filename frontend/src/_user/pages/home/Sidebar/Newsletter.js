import React from 'react';
import '../../../../assets/css/user/home.css';
import '../../../../assets/js/home.js';
const Newsletter = () => (
  <div className="sidebar" data-aos="fade-up">
  <div className="newsletters" data-aos="fade-up">
    <h2 className="sidebar-title">NEWSLETTERS</h2>
    <div className="newsletters-content">
      <p>Đăng kí để nhận thông tin mới nhất từ chúng tôi!</p>
      <input
        style={{ height: 30 }}
        type="text"
        defaultValue="Nhập email của bạn"
      />
      <button className="subscribe">Subscribe</button>
    </div>
  </div>
</div>

);

export default Newsletter;
