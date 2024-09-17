import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../../../assets/css/admin/categorymanagement.css';

const MainCategory = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const token = localStorage.getItem('token'); // Hoặc lấy từ context/session
        const response = await axios.get('http://localhost:3000/api/parent-categories', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMainCategories(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu danh mục chính:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };

    fetchMainCategories();
  }, []);

  return (
    <div className="data-content" id="main-category-table">
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục chính</th>
            <th>Ngày tạo</th>
            <th className="td-wide">Người tạo</th>
            <th className="td-narrow">Danh mục phụ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {mainCategories.map(category => (
            <tr key={category.id}>
              <td>{category.code}</td>
              <td>{category.name}</td>
              <td>{category.createdAt}</td>
              <td className="td-wide">{category.creator}</td>
              <td className="td-narrow">{category.subCategories?.length || 0}</td>
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

export default MainCategory;
