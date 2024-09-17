import React from 'react';
import '../../../../assets/css/user/detail.css';

const RelatedProducts = () => (
  <div className="detail-related-products">
    <div className="detail-title">
      <h3>
        UPSELL PRODUCTS <hr />
      </h3>
    </div>
    <div className="detail-product-carousel">
      <div className="detail-product-item">
        <img src="assets/images/products/p1.jpg" alt="Product 1" />
        <div className="detail-product-tag">SALE</div>
        <div className="detail-price">
          <span className="detail-product-name">Floral Print Buttoned</span>
          <div className="detail-product-rating">★★★★☆</div>
          <div className="detail-product-price">
            $650.99 <span className="detail-product-discount">$800.00</span>
          </div>
        </div>
      </div>
      <div className="detail-product-item">
        <img src="assets/images/products/p2.jpg" alt="Product 2" />
        <div className="detail-product-tag">SALE</div>
        <div className="detail-price">
          <span className="detail-product-name">Floral Print Buttoned</span>
          <div className="detail-product-rating">★★★★☆</div>
          <div className="detail-product-price">
            $650.99 <span className="detail-product-discount">$800.00</span>
          </div>
        </div>
      </div>
      <div className="detail-product-item">
        <img src="assets/images/products/p3.jpg" alt="Product 3" />
        <div className="detail-product-tag hot">HOT</div>
        <div className="detail-price">
          <span className="detail-product-name">Floral Print Buttoned</span>
          <div className="detail-product-rating">★★★★☆</div>
          <div className="detail-product-price">
            $650.99 <span className="detail-product-discount">$800.00</span>
          </div>
        </div>
      </div>
      <div className="detail-product-item">
        <img src="assets/images/products/p4.jpg" alt="Product 4" />
        <div className="detail-product-tag new">NEW</div>
        <div className="detail-price">
          <span className="detail-product-name">Floral Print Buttoned</span>
          <div className="detail-product-rating">★★★★☆</div>
          <div className="detail-product-price">
            $650.99 <span className="detail-product-discount">$800.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RelatedProducts;
