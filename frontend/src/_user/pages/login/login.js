/* global FB */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../../assets/css/user/login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    hoTen: '',
    email: '',
    soDienThoai: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '499553345790915', // Thay thế YOUR_APP_ID bằng App ID của bạn
        cookie     : true,
        xfbml      : true,
        version    : 'v20.0' // Phiên bản SDK mới nhất
      });

      FB.AppEvents.logPageView();   
      console.log('FB SDK loaded');
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  const handleFacebookLogin = () => {
    FB.login(response => {
      if (response.authResponse) {
        console.log('Facebook login success:', response);
        FB.api('/me', { fields: 'name,email' }, async userData => {
          try {
            console.log('Facebook API response:', userData);
            const res = await axios.post('http://localhost:3000/api/users/facebook-login', {
              access_token: response.authResponse.accessToken
            });
            console.log('API response:', res);

            alert('Đăng nhập bằng Facebook thành công');
            const user = res.data.userInfo;
            localStorage.setItem('userInfo', JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage

            // Tạo và phát sự kiện tùy chỉnh
            const event = new CustomEvent('userLoggedIn', { detail: user });
            window.dispatchEvent(event);

            navigate('/');
          } catch (error) {
            console.error('API call error:', error);
            alert('Đăng nhập bằng Facebook thất bại, vui lòng thử lại sau');
          }
        });
      } else {
        console.error('Facebook login failed:', response);
        alert('Đăng nhập bằng Facebook thất bại, vui lòng thử lại');
      }
    }, { scope: 'public_profile,email' });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', loginData);
      const { token, userInfo } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      alert('Bạn đã đăng nhập thành công');

      // Tạo và phát sự kiện tùy chỉnh
      const event = new CustomEvent('userLoggedIn', { detail: userInfo });
      window.dispatchEvent(event);

      // Chuyển hướng dựa trên vai trò
      if (userInfo.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin đăng nhập');
    }
  };


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Mật khẩu xác nhận không khớp');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        hoTen: registerData.hoTen,
        email: registerData.email,
        soDienThoai: registerData.soDienThoai,
        username: registerData.username,
        password: registerData.password,
        role: 'user' // Vai trò mặc định
      });
      alert('Đăng ký thành công, vui lòng đăng nhập');
      setRegisterData({
        hoTen: '',
        email: '',
        soDienThoai: '',
        username: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      alert('Đăng ký thất bại, vui lòng kiểm tra lại thông tin');
    }
  };

  return (
    <div className="login-content">
      <div className="login">
        <h2>Đăng nhập</h2>
        <p>Xin chào, chào mừng bạn đến với tài khoản của bạn.</p>
        <div className="social-login-buttons">
          <button className="social-login fb" onClick={handleFacebookLogin}>
            <i className="fab fa-facebook-f" /> Đăng nhập bằng Facebook
          </button>
          <button className="social-login google">
            <i className="fab fa-google" /> Đăng nhập bằng Google
          </button>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="username">Tên đăng nhập *</label>
          <input type="text" id="username" value={loginData.username} onChange={handleLoginChange} required />
          <label htmlFor="password">Mật khẩu *</label>
          <input type="password" id="password" value={loginData.password} onChange={handleLoginChange} required />
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Hãy nhớ tôi!</label>
          </div>
          <button type="submit" className="submit-btn">Đăng nhập</button>
          <a href="#" className="forgot-password">Quên mật khẩu?</a>
        </form>
      </div>
      <div className="register">
        <h2>Tạo tài khoản mới</h2>
        <p>Tạo tài khoản mới của bạn.</p>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="hoTen">Họ tên *</label>
          <input type="text" id="hoTen" value={registerData.hoTen} onChange={handleRegisterChange} required />
          <label htmlFor="email">Địa chỉ email *</label>
          <input type="email" id="email" value={registerData.email} onChange={handleRegisterChange} required />
          <label htmlFor="soDienThoai">Số điện thoại *</label>
          <input type="text" id="soDienThoai" value={registerData.soDienThoai} onChange={handleRegisterChange} required />
          <label htmlFor="username">Tên đăng nhập *</label>
          <input type="text" id="username" value={registerData.username} onChange={handleRegisterChange} required />
          <label htmlFor="password">Mật khẩu *</label>
          <input type="password" id="password" value={registerData.password} onChange={handleRegisterChange} required />
          <label htmlFor="confirmPassword">Xác nhận mật khẩu *</label>
          <input type="password" id="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} required />
          <button type="submit" className="submit-btn">Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
