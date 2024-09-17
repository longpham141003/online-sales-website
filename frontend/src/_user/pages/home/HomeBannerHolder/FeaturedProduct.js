import React, { useState } from 'react';
import '../../../../assets/css/user/home.css';
import '../../../../assets/js/home.js';
const FeaturedProduct = () => (
<div className="featured-products" data-aos="fade-up">
  <h2 className="sidebar-title">FEATURED PRODUCTS</h2>
  <div className="product-list featured active">
    <div className="product" data-aos="fade-up">
      <div className="label hot">HOT</div>
      <img src="assets/images/products/p1.jpg" alt="Product 1" />
      <a href="">
        <h3>Floral Print Buttoned</h3>
      </a>
      <div className="ratings">
        <span>★★★★☆</span>
      </div>
      <p className="price">
        $450.99 <span className="discount">$800</span>
      </p>
      <div className="overlay">
        <div className="icon-container" data-aos="fade-down">
          <a href="#" className="icon">
            <i className="fas fa-shopping-cart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-signal" />
          </a>
        </div>
      </div>
    </div>
    <div className="product" data-aos="fade-up">
      <div className="label hot">HOT</div>
      <img src="assets/images/products/p1.jpg" alt="Product 1" />
      <a href="">
        <h3>Floral Print Buttoned</h3>
      </a>
      <div className="ratings">
        <span>★★★★☆</span>
      </div>
      <p className="price">
        $450.99 <span className="discount">$800</span>
      </p>
      <div className="overlay">
        <div className="icon-container" data-aos="fade-down">
          <a href="#" className="icon">
            <i className="fas fa-shopping-cart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-signal" />
          </a>
        </div>
      </div>
    </div>
    <div className="product" data-aos="fade-up">
      <div className="label hot">HOT</div>
      <img src="assets/images/products/p1.jpg" alt="Product 1" />
      <a href="">
        <h3>Floral Print Buttoned</h3>
      </a>
      <div className="ratings">
        <span>★★★★☆</span>
      </div>
      <p className="price">
        $450.99 <span className="discount">$800</span>
      </p>
      <div className="overlay">
        <div className="icon-container" data-aos="fade-down">
          <a href="#" className="icon">
            <i className="fas fa-shopping-cart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-signal" />
          </a>
        </div>
      </div>
    </div>
    <div className="product" data-aos="fade-up">
      <div className="label hot">HOT</div>
      <img src="assets/images/products/p1.jpg" alt="Product 1" />
      <a href="">
        <h3>Floral Print Buttoned</h3>
      </a>
      <div className="ratings">
        <span>★★★★☆</span>
      </div>
      <p className="price">
        $450.99 <span className="discount">$800</span>
      </p>
      <div className="overlay">
        <div className="icon-container" data-aos="fade-down">
          <a href="#" className="icon">
            <i className="fas fa-shopping-cart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-heart" />
          </a>
          <a href="#" className="icon">
            <i className="fas fa-signal" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="featured-pagination" className="pagination" data-aos="fade-up">
    <a className="see-more" href="">
      Xem thêm
    </a>
  </div>
</div>


);

export default FeaturedProduct;
