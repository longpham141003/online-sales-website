import React, { useEffect, useState } from 'react';
import '../../../../assets/css/user/checkout.css';

const Step1 = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(' userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div id="step1">
      <div className="checkout-step" data-step={1}>
        <div className="number">1</div>
        <div className="step">PHƯƠNG PHÁP KIỂM TRA</div>
      </div>
      <div className="checkout-content-detail" id="checkout-content-1">
        <div className="checkout-user">
          <div className="column-left">
            <h3>Thông tin tài khoản đặt hàng:</h3>
            <p>Tài khoản đặt hàng</p>
            <div className="user-info">
              <p><span className="label">Tên tài khoản:</span> <span>{user?.username}</span></p>
              <p><span className="label">Số điện thoại:</span> <span>{user?.soDienThoai}</span></p>
              <p><span className="label">Email:</span> <span>{user?.email}</span></p>
            </div>
            
          </div>
          <div className="column-right">
          <p>Đăng nhập bằng tài khoản khác</p>
            <form>
              <label htmlFor="email">Địa chỉ email *</label>
              <input type="email" id="email" name="email" required="" />
              <label htmlFor="password">Mật khẩu *</label>
              <input type="password" id="password" name="password" required="" />
              <a href="#">Quên mật khẩu?</a>
              <button type="submit">Đăng Nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
