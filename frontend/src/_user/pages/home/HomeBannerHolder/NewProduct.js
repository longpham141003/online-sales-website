import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hàm để lấy dữ liệu sản phẩm từ API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error);
      }
    };

    // Gọi hàm lấy dữ liệu khi component được render
    fetchProducts();
  }, []);

  return (
    <div className="new-products" data-aos="fade-up">
      <h2 className="sidebar-title">SẢN PHẨM MỚI</h2>
      <div className="slider-container">
        <div className="product-list all active">
          {products.slice(0, 4).map((product) => (
            <div className="product" key={product._id} data-aos="fade-up">
              <div className={`label ${product.trangThai}`}>{product.trangThai.toUpperCase()}</div>
              <img src={`http://localhost:3000/${product.image}`} alt={product.tenSanPham} />
              <a href="">
                <h3>{product.tenSanPham}</h3>
              </a>
              <div className="ratings">
                <span>★★★★☆</span>
              </div>
              <p className="price">
                ${product.giaTienHienTai} <span className="discount">${product.giaTienCu}</span>
              </p>
              <div className="overlay">
                <div className="icon-container" data-aos="fade-down">
                  <a href="#" className="icon">
                    <i className="fas fa-shopping-cart" />
                  </a>
                  <a style={{ backgroundColor: '#FFD700' }} href="#" className="icon">
                    <i className="fas fa-heart" />
                  </a>
                  <a style={{ backgroundColor: '#FFD700' }} href="#" className="icon">
                    <i className="fas fa-signal" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="pagination" className="pagination" data-aos="fade-up">
          <a className="see-more" href="">
            Xem thêm
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
