import React from "react";
import '../../../assets/css/admin/addorder.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";
// import AdminMain from "../../AdminMain";

const AddOrder = () => {
  return (
    <>
      <div className="order-create-new-order">
        <h3 className="order-section-title" style={{ width: '1120px' }}>Tạo mới đơn hàng</h3>
        <form className="order-form">
          <div className="order-form-group">
            <label htmlFor="order-id">ID đơn hàng </label>
            <input type="text" id="order-id" placeholder="ID đơn hàng" />
          </div>
          <div className="order-form-group">
            <label htmlFor="order-customer-name">Tên khách hàng</label>
            <input type="text" id="order-customer-name" placeholder="Tên khách hàng" />
          </div>
          <div className="order-form-group">
            <label htmlFor="order-customer-phone">Số điện thoại khách hàng</label>
            <input type="text" id="order-customer-phone" placeholder="Số điện thoại khách hàng" />
          </div>
          <div className="order-location-wrapper">
            <div className="order-form-group">
              <label htmlFor="order-address-detail">Địa chỉ chi tiết</label>
              <input type="text" id="order-address-detail" placeholder="Địa chỉ chi tiết" />
            </div>
            <div className="order-form-group order-tinh">
              <label htmlFor="order-province">Tỉnh/Thành phố</label>
              <select id="order-province" required="">
                <option value="">Chọn Tỉnh/Thành phố</option>
                {/* Các tỉnh sẽ được thêm động ở đây */}
              </select>
            </div>
            <div className="order-form-group order-huyen">
              <label htmlFor="order-district">Huyện</label>
              <select id="order-district" disabled="" required="">
                <option value="">Chọn Huyện</option>
                {/* Các huyện sẽ được thêm động ở đây */}
              </select>
            </div>
            <div className="order-form-group order-xa">
              <label htmlFor="order-ward">Xã</label>
              <select id="order-ward" disabled="" required="">
                <option value="">Chọn Xã</option>
                {/* Các xã sẽ được thêm động ở đây */}
              </select>
            </div>
          </div>
          {/* Phần thêm sản phẩm */}
          <div className="order-product-list">
            <div className="order-product-item" id="order-product-item-1">
              <div className="order-form-group">
                <label htmlFor="order-product-name-1">Tên sản phẩm</label>
                <input type="text" id="order-product-name-1" placeholder="Tên sản phẩm" />
              </div>
              <div className="order-form-group">
                <label htmlFor="order-quantity-1">Số lượng</label>
                <input type="number" id="order-quantity-1" placeholder="Số lượng" />
              </div>
              <button
                type="button"
                className="order-remove-product"
                onclick="removeProduct(1)"
              >
                Xóa
              </button>
            </div>
            <button type="button" id="order-add-product">
              Thêm sản phẩm
            </button>
          </div>
          <div className="order-form-group">
            <label htmlFor="order-status">Tình trạng</label>
            <select id="order-status">
              <option>-- Chọn tình trạng --</option>
              <option value="pending">Chờ xử lý</option>
              <option value="completed">Hoàn thành</option>
              <option value="canceled">Đã hủy</option>
            </select>
          </div>
          <div className="order-form-group">
            <label htmlFor="order-shipping-options">Tùy chọn vận chuyển</label>
            <select id="order-shipping-options">
              <option>-- Chọn phương thức --</option>
              <option value="standard">Giao hàng tiêu chuẩn</option>
              <option value="express">Giao hàng nhanh</option>
              <option value="special">Giao hàng đặc biệt</option>
            </select>
          </div>
          <div className="order-form-group order-total-payment">
            <label htmlFor="order-total">Tổng tiền thanh toán</label>
            <input type="text" id="order-total-payment" placeholder="0 VND" readOnly="" />
          </div>
          <div className="order-form-group">
            <label htmlFor="order-note">Ghi chú đơn hàng</label>
            <textarea id="order-note" rows={4} placeholder="Ghi chú" defaultValue={""} />
          </div>
          <div className="order-form-actions">
            <button type="submit" className="order-btn order-btn-save">
              Lưu lại
            </button>
            <button type="button" className="order-btn order-btn-cancel">
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOrder;
