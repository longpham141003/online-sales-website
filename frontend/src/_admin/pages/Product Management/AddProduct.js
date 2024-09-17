import React from "react";
import '../../../assets/css/admin/addproduct.css';

const AddProduct = () => {
  return (
    <>
    <h3 className="product-section-title" style={{ width: '1120px' }}>Tạo sản phẩm mới</h3>
      <div className="add-create-new-product">
        <h2 className="add-create-new-product-header">Tạo mới sản phẩm</h2>
        <div className="add-form-container">
          <button className="add-btn add-btn-success">
            <i className="fas fa-plus" /> Thêm nhà cung cấp
          </button>
          <button className="add-btn add-btn-success">
            <i className="fas fa-plus" /> Thêm danh mục
          </button>
          <button className="add-btn add-btn-success">
            <i className="fas fa-plus" /> Thêm tình trạng
          </button>
          <div className="add-form-group">
            <label htmlFor="productName" className="add-form-group-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="productName"
              className="add-form-control"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="quantity" className="add-form-group-label">
              Số lượng
            </label>
            <input
              type="number"
              id="quantity"
              className="add-form-control"
              placeholder="Nhập số lượng"
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="category" className="add-form-group-label">
              Danh mục
            </label>
            <select id="category" className="add-form-control">
              <option>-- Chọn danh mục --</option>
            </select>
          </div>
          <div className="add-form-group">
            <label htmlFor="supplier" className="add-form-group-label">
              Nhà cung cấp
            </label>
            <select id="supplier" className="add-form-control">
              <option>-- Chọn nhà cung cấp --</option>
            </select>
          </div>
          <div className="add-form-group">
            <label htmlFor="price" className="add-form-group-label">
              Giá bán
            </label>
            <input
              type="text"
              id="price"
              className="add-form-control"
              placeholder="Nhập giá bán"
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="cost" className="add-form-group-label">
              Giá vốn
            </label>
            <input
              type="text"
              id="cost"
              className="add-form-control"
              placeholder="Nhập giá vốn"
            />
          </div>
          <div className="add-form-group">
            <label htmlFor="status" className="add-form-group-label">
              Tình trạng
            </label>
            <select id="status" className="add-form-control">
              <option>-- Chọn tình trạng --</option>
            </select>
          </div>
          <div className="add-form-group">
            <label htmlFor="productImage" className="add-form-group-label">
              Ảnh sản phẩm
            </label>
            <button className="add-btn add-btn-primary">
              <i className="fas fa-upload" /> Chọn ảnh
            </button>
          </div>
          <div className="add-form-group">
            <label htmlFor="description" className="add-form-group-label">
              Mô tả sản phẩm
            </label>
            <textarea
              id="description"
              className="add-form-control"
              placeholder="Nhập mô tả sản phẩm"
              defaultValue={""}
            />
          </div>
          <div className="add-form-actions">
            <button className="add-btn add-btn-success">Lưu lại</button>
            <button className="add-btn add-btn-danger">Hủy bỏ</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
