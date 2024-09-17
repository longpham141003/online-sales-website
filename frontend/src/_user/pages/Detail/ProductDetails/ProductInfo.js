import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../../assets/css/user/detail.css';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams(); // Lấy ID sản phẩm từ URL

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Có lỗi xảy ra khi lấy sản phẩm:", error);
      });
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="detail-product-detail">
      <div className="detail-product-images">
        <img
          className="detail-main-image"
          src={`http://localhost:3000/${product.image}`}
          alt={product.tenSanPham}
        />
        <div className="detail-thumbnail-images">
          <img src={`http://localhost:3000/${product.image}`} alt="Thumbnail 1" />
          <img src={`http://localhost:3000/${product.image}`} alt="Thumbnail 2" />
          <img src={`http://localhost:3000/${product.image}`} alt="Thumbnail 3" />
          <img src={`http://localhost:3000/${product.image}`} alt="Thumbnail 4" />
        </div>
      </div>
      <div className="detail-product-info">
        <h1>{product.tenSanPham}</h1>
        <div className="detail-rating">
          <span>★★★★☆</span>
          <span>({product.reviews ? product.reviews.length : 0} Reviews)</span>
        </div>
        <div className="detail-availability">
          Tình trạng: <span className="detail-in-stock">{product.inStock ? "Còn hàng" : "Hết hàng"}</span>
        </div>
        <p>{product.chiTietSanPham}</p>
        <div className="detail-fixed-actions">
          <hr />
          <div className="detail-price-actions">
            <div className="detail-price">
              ${product.giaTienHienTai} <span className="detail-discount">${product.giaTienCu}</span>
            </div>
            <div className="detail-actions">
              <button className="wishlist">
                <i className="fas fa-heart" />
              </button>
              <button className="compare">
                <i className="fas fa-signal" />
              </button>
              <button className="email">
                <i className="fas fa-envelope" />
              </button>
            </div>
          </div>
          <hr />
          <div className="detail-quantity-cart">
            <div className="detail-quantity">
              Số lượng:
              <input type="number" value={quantity} min={1} readOnly />
              <button onClick={decreaseQuantity}>-</button>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="detail-add-to-cart">
              <i className="fas fa-shopping-cart" /> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
