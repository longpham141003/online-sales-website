import React, { useState } from 'react';
import axios from 'axios';
import './../assets/css/admin/adminlogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { username, password });
      const { token, userInfo } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      if (userInfo.role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else {
        setError('You do not have access rights');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-admin-wrapper">
      <div className="login-admin-container">
        <div className="login-admin-form">
          <h2>Admin login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-admin-input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Account name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="login-admin-input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-admin-remember-me">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-admin-btn">Login</button>
            <div className="login-admin-additional-options">
              <a href="#" className="login-admin-forgot-password">Forget Password?</a>
              <p>or login with</p>
              <p>Don’t have an account? <a href="#">Register here</a></p>
            </div>
          </form>
        </div>
        <div className="login-admin-image">
          <img src="/assets/images/snapedit_1724339080258.jpeg" alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
