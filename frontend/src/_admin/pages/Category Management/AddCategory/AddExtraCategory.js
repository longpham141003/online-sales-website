import React, { useEffect } from "react";
import '../../../../assets/css/admin/addcategory.css';

const AddExtraCategory = () => {
  return (
<div className="create-new-category">
  <h3 className="section-title" style={{ width: '1120px' }}>Tạo mới danh mục phụ</h3>
  <form>
    <div className="form-group">
      <label htmlFor="parent-category">Danh mục chính</label>
      <select id="parent-category">
        <option value="">-- Chọn danh mục chính --</option>
        <option value={1}>Danh mục 1</option>
        <option value={2}>Danh mục 2</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="category-name">Tên danh mục</label>
      <input type="text" id="category-name" placeholder="Tên danh mục" />
    </div>
    <div className="form-actions">
      <button type="submit" className="btn btn-save">
        Lưu lại
      </button>
      <button type="button" className="btn btn-cancel">
        Hủy bỏ
      </button>
    </div>
  </form>
</div>
  );
};

export default AddExtraCategory;
