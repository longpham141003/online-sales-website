import React from "react";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <div className="left-bar">
      <div className="user-info">
        <img src="https://via.placeholder.com/80" alt="User Avatar" />
        <h4>{userInfo ? userInfo.hoTen : 'Người dùng'}</h4> {/* Hiển thị tên người dùng */}
        <p>Chào mừng bạn trở lại</p>
      </div>
      <NavLink to="/admin/ordermanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-shopping-cart"></i> POS Bán Hàng
      </NavLink>
      <NavLink to="/admin/dashboard" className="menu-item" activeClassName="active">
        <i className="fas fa-tachometer-alt"></i> Bảng điều khiển
      </NavLink>
      <NavLink to="/admin/productmanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-tags"></i> Quản lý sản phẩm
      </NavLink>
      <NavLink to="/admin/categorymanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-th-list"></i> Quản lý danh mục
      </NavLink>
      <NavLink to="/admin/suppliermanager" className="menu-item" activeClassName="active">
        <i className="fas fa-truck"></i> Quản lý nhà cung cấp
      </NavLink>
      <NavLink to="/admin/ordermanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-clipboard-list"></i> Quản lý đơn hàng
      </NavLink>
      <NavLink to="/admin/customermanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-users"></i> Quản lý khách hàng
      </NavLink>
      <NavLink to="/admin/personnelmanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-user-friends"></i> Quản lý nhân viên
      </NavLink>
      <NavLink to="/admin/accountmanagement" className="menu-item" activeClassName="active">
        <i className="fas fa-user"></i> Quản lý tài khoản
      </NavLink>
      <NavLink to="/admin/revenuereport" className="menu-item" activeClassName="active">
        <i className="fas fa-chart-line"></i> Báo cáo doanh thu
      </NavLink>
      <NavLink to="/admin/workschedule" className="menu-item" activeClassName="active">
        <i className="fas fa-calendar-alt"></i> Lịch công tác
      </NavLink>
      <NavLink to="/admin/notifications" className="menu-item" activeClassName="active">
        <i className="fas fa-bell"></i> Thông báo
      </NavLink>
      <NavLink to="/admin/systemsettings" className="menu-item" activeClassName="active">
        <i className="fas fa-cogs"></i> Cài đặt hệ thống
      </NavLink>
    </div>
  );
};

export default LeftBar;
