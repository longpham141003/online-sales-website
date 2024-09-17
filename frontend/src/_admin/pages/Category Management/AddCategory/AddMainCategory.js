import React, { useEffect } from "react";
import '../../../../assets/css/admin/addcategory.css';

const AddMainCategory = () => {
  return (
    <div className="create-new-category">
  <h3 className="section-title"  style={{ width: '1120px' }}>Tạo mới danh mục chính</h3>
  <form>
    <div className="form-group">
      <label htmlFor="category-name">Tên danh mục</label>
      <input type="text" id="category-name" placeholder="Tên danh mục" />
    </div>{" "}
    <br />
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

export default AddMainCategory;
