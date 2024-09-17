import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../../assets/css/user/info.css';

const AccountInfo = () => {
  const [user, setUser] = useState(null);
  const [editField, setEditField] = useState(null);
  const [formData, setFormData] = useState({
    hoTen: "",
    email: "",
    soDienThoai: "",
    password: "",
    newPassword: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUser) {
      setUser(storedUser);
      setFormData({
        hoTen: storedUser.hoTen,
        email: storedUser.email,
        soDienThoai: storedUser.soDienThoai,
      });
    }
  }, []);

  const handleFieldChange = (field) => {
    setEditField(field);
  };

  const handleSaveClick = async () => {
    const token = localStorage.getItem('token');

    if (editField === "password") {
      if (formData.newPassword !== formData.confirmPassword) {
        alert("Mật khẩu mới và xác nhận mật khẩu không khớp");
        return;
      }
      try {
        await axios.put(
          'http://localhost:3000/api/users/update-password',
          {
            currentPassword: formData.password,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        alert("Cập nhật mật khẩu thành công");
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Cập nhật mật khẩu thất bại");
      }
    } else {
      try {
        const response = await axios.put(
          'http://localhost:3000/api/users/update-info',
          {
            hoTen: formData.hoTen,
            email: formData.email,
            soDienThoai: formData.soDienThoai,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        const updatedUser = response.data.user;
        setUser(updatedUser);
        localStorage.setItem('userInfo', JSON.stringify(updatedUser));
        alert("Cập nhật thông tin thành công");
      } catch (error) {
        console.error("Error updating info:", error);
        alert("Cập nhật thông tin thất bại");
      }
    }
    setEditField(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="account-info">
      <h2>
        Thông tin tài khoản
        <span className="edit-info" onClick={() => handleFieldChange("all")}>
          <i className="fas fa-edit" /> Sửa thông tin
        </span>
      </h2>
      <p>
        <strong>Họ tên:</strong> 
        {editField === "hoTen" ? (
          <input
            type="text"
            id="hoTen"
            className="edit-input"
            value={formData.hoTen}
            onChange={handleChange}
          />
        ) : (
          <span>{user.hoTen}</span>
        )}
        {editField !== "hoTen" && editField !== "all" && (
          <button className="edit-button" onClick={() => handleFieldChange("hoTen")}>
            Đổi
          </button>
        )}
      </p>
      <p>
        <strong>Tên đăng nhập:</strong> <span>{user.username}</span>
      </p>
      <p>
        <strong>Mật khẩu:</strong>
        {editField === "password" ? (
          <>
            <input
              type="password"
              id="password"
              className="edit-input"
              placeholder="Mật khẩu hiện tại"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              id="newPassword"
              className="edit-input"
              placeholder="Mật khẩu mới"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <input
              type="password"
              id="confirmPassword"
              className="edit-input"
              placeholder="Xác nhận mật khẩu mới"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </>
        ) : (
          <span>********</span>
        )}
        {editField !== "password" && editField !== "all" && (
          <button className="edit-button" onClick={() => handleFieldChange("password")}>
            Đổi
          </button>
        )}
      </p>
      <p>
        <strong>Email:</strong> 
        {editField === "email" ? (
          <input
            type="email"
            id="email"
            className="edit-input"
            value={formData.email}
            onChange={handleChange}
          />
        ) : (
          <span>{user.email}</span>
        )}
        {editField !== "email" && editField !== "all" && (
          <button className="edit-button" onClick={() => handleFieldChange("email")}>
            Đổi
          </button>
        )}
      </p>
      <p>
        <strong>Số điện thoại:</strong> 
        {editField === "soDienThoai" ? (
          <input
            type="tel"
            id="soDienThoai"
            className="edit-input"
            value={formData.soDienThoai}
            onChange={handleChange}
          />
        ) : (
          <span>{user.soDienThoai}</span>
        )}
        {editField !== "soDienThoai" && editField !== "all" && (
          <button className="edit-button" onClick={() => handleFieldChange("soDienThoai")}>
            Đổi
          </button>
        )}
      </p>
      {editField && (
        <div className="account-info-footer">
          <button id="save-button" className="save-button" onClick={handleSaveClick}>
            Lưu
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
