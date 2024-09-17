import React from "react";
import '../../../assets/css/admin/addemployee.css';

// import AdminMain from "../../AdminMain";

const AddProduct = () => {
  return (
    <>
    <h3 className="employee-section-title" style={{ width: '1120px' }}>Tạo mnhân viên mới</h3>
      <div className="employee-add-staff">
  <form className="employee-add-employee-form">
    <div className="employee-form-group">
      <label htmlFor="employee-full-name">Họ và tên</label>
      <input type="text" id="employee-full-name" placeholder="Nhập họ và tên" />
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-birthdate">Ngày sinh</label>
      <input type="date" id="employee-birthdate" />
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-gender">Giới tính</label>
      <select id="employee-gender">
        <option value="male">Nam</option>
        <option value="female">Nữ</option>
        <option value="other">Khác</option>
      </select>
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-phone">Số điện thoại</label>
      <input type="text" id="employee-phone" placeholder="Nhập số điện thoại" />
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-address">Địa chỉ</label>
      <input type="text" id="employee-address" placeholder="Nhập địa chỉ" />
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-position">Chức vụ</label>
      <input type="text" id="employee-position" placeholder="Nhập chức vụ" />
    </div>
    <div className="employee-form-group">
      <label htmlFor="employee-profile-picture">Ảnh đại diện</label>
      <input type="file" id="employee-profile-picture" />
    </div>
    <div className="employee-form-actions">
      <button type="submit" className="employee-btn employee-btn-save">
        Lưu lại
      </button>
      <button type="button" className="employee-btn employee-btn-cancel">
        Hủy bỏ
      </button>
    </div>
  </form>
      </div>
    </>
  );
};

export default AddProduct;
