import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../assets/css/admin/productmanagement.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('token'); // Hoặc lấy từ context/session
        const response = await axios.get('http://localhost:3000/api/products', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Dữ liệu sản phẩm:', response.data); // In ra dữ liệu để kiểm tra
        setProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Button label="Thêm sản phẩm"/>
      <div className="body-content">
        <ActionToolbar/>
        <div className="data-content">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th style={{ width: '100px' }}>Mã sản phẩm</th>
                <th style={{ width: '200px' }}>Tên sản phẩm</th>
                <th style={{ width: '150px' }}>Ảnh</th>
                <th style={{ width: '150px' }}>Tình trạng</th>
                <th style={{ width: '120px' }}>Giá tiền</th>
                <th style={{ width: '200px' }}>Danh mục</th>
                <th style={{ width: '150px' }}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="8">{error}</td>
                </tr>
              ) : products.length > 0 ? (
                products.map(product => (
                  <tr key={product._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{product.productCode}</td>
                    <td>{product.tenSanPham}</td>
                    <td>
                      <img src={`http://localhost:3000/${product.image}`} alt={product.tenSanPham} style={{ width: '100px' }} />
                    </td>
                    <td>
                    <span className={`status ${product.soLuong > 0 ? 'in-stock' : 'out-of-stock'}`}>
                      {product.soLuong > 0 ? 'Còn hàng' : 'Hết hàng'}
                    </span>
                    </td>
                    <td>{product.giaTienHienTai} đ</td>
                    <td>{product.danhMuc?.name}</td> {/* Giả sử bạn có trường danhMuc trong product */}
                    <td>
                      <button className="btn btn-delete">
                        <i className="fas fa-trash" />
                      </button>
                      <button className="btn btn-edit">
                        <i className="fas fa-edit" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Không có dữ liệu sản phẩm</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Panigation/>
      </div>
    </>
  );
};

export default ProductManagement;
