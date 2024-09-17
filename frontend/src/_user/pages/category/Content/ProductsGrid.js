import React, { useContext } from 'react';
import { ProductContext } from '../../../contexts/CategoryContext';
import { Link } from 'react-router-dom';
import '../../../../assets/css/user/category.css';
import axios from 'axios';

const ProductsGrid = () => {
  const { products } = useContext(ProductContext);

  const addToCart = async (productId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to add items to the cart');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/cart', {
        productId,
        quantity: 1,
        color: 'blue', // Thay thế bằng màu sắc sản phẩm nếu có
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Sản phẩm đã được thêm vào giỏ hàng:', response.data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
      if (error.response && error.response.status === 401) {
        alert('Your session has expired. Please log in again.');
        localStorage.removeItem('token');
        // Điều hướng đến trang đăng nhập nếu cần
      }
    }
  };

  return (
    <div className="category-list-product category-grid">
      {products.map(product => (
        <div key={product._id} className="category-product-item">
          <Link to={`/detail/${product._id}`}><img src={`http://localhost:3000/${product.image}`} alt={product.tenSanPham} /></Link>
          <div className="product-details">
            <Link to={`/detail/${product._id}`}><h3>{product.tenSanPham}</h3></Link>
            <div className="rating">
              <span>★★★★☆</span>
            </div>
            <p>{product.chiTietSanPham}</p>
            <div className="price">
              <span className="current-price">${product.giaTienHienTai}</span>
              {product.giaTienCu && (
                <span className="original-price">${product.giaTienCu}</span>
              )}
            </div>
            <button className="add-to-cart" onClick={() => addToCart(product._id)}>
              <i className="fas fa-shopping-cart" /> Thêm vào giỏ hàng
            </button>
            <button className="wishlist">
              <i className="fas fa-heart" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
