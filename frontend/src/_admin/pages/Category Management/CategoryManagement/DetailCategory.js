import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../../../assets/css/admin/categorymanagement.css';

const DetailCategory = () => {
  const [detailCategories, setDetailCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetailCategories = async () => {
      try {
        const token = localStorage.getItem('token'); // Hoặc lấy từ context/session
        const response = await axios.get('http://localhost:3000/api/grandchild-categories', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setDetailCategories(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu danh mục chi tiết:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };

    fetchDetailCategories();
  }, []);

  return (
    <div className="data-content" id="detailed-category-table">
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục chi tiết</th>
            <th>Danh mục phụ</th>
            <th>Ngày tạo</th>
            <th className="td-wide">Người tạo</th>
            <th className="td-narrow">Số lượng sản phẩm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {detailCategories.map(category => (
            <tr key={category.code}>
              <td>{category.code}</td>
              <td>{category.name}</td>
              <td>{category.parent_id?.name || 'N/A'}</td> {/* Hiển thị tên danh mục phụ */}
              <td>{category.createdAt}</td>
              <td className="td-wide">{category.creator}</td>
              <td className="td-narrow">{category.productCount || 0}</td>
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

export default DetailCategory;
