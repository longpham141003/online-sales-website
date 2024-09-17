import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../../../assets/css/admin/categorymanagement.css';

const ExtraCategory = () => {
  const [extraCategories, setExtraCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExtraCategories = async () => {
      try {
        const token = localStorage.getItem('token'); // Hoặc lấy từ context/session
        const response = await axios.get('http://localhost:3000/api/child-categories', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setExtraCategories(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu danh mục phụ:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };

    fetchExtraCategories();
  }, []);

  return (
    <div className="data-content" id="sub-category-table">
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Mã danh mục</th>
            <th>Tên danh mục phụ</th>
            <th>Danh mục chính</th>
            <th>Ngày tạo</th>
            <th className="td-wide">Người tạo</th>
            <th className="td-narrow">Danh mục chi tiết</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {extraCategories.map(category => (
            <tr key={category.code}>
              <td>{category.code}</td>
              <td>{category.name}</td>
              <td>{category.parent_id?.name || 'N/A'}</td> {/* Hiển thị tên danh mục chính */}
              <td>{new Date(category.createdAt).toLocaleDateString()}</td>
              <td className="td-wide">{category.creator}</td>
              <td className="td-narrow">{category.detailCategories?.length || 0}</td>
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
  );
};

export default ExtraCategory;
