import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";
import '../../../assets/css/admin/accountmanagement.css';

const AccountManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage hoặc context
        const response = await axios.get('http://localhost:3000/api/users/all', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Button label="Tạo tài khoản mới" />
      <div className="body-content">
        <ActionToolbar />
        <div className="data-content">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th style={{ width: '400px' }} >Họ tên</th>
                <th>Tên tài khoản</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th style={{ width: '200px' }}>Vai trò</th>
                <th style={{ width: '400px' }}>Lần đăng nhập cuối cùng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.userCode}</td>
                  <td>{user.hoTen}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.soDienThoai}</td>
                  <td>{user.role}</td>
                  <td>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Chưa đăng nhập'}</td>
                  <td>
                    <button className="btn btn-edit">
                      <i className="fas fa-edit" />
                    </button>
                    <button className="btn btn-delete">
                      <i className="fas fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Panigation />
      </div>
    </>
  );
};

export default AccountManagement;
