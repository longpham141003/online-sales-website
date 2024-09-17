import React from 'react';
import '../../../../assets/css/user/home.css';
import '../../../../assets/js/home.js';
const Slider = () => (
  <div className="banner">
  <div className="banner-slider">
    <div className="banner1">
      <img
        className="slide-img"
        src="assets/images/sliders/01.jpg"
        alt="Spring Fashion Banner"
      />
      <div className="banner-content">
        <h1>SPRING 2016</h1>
        <h2>WOMEN FASHION</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit.
        </p>
        <button>SHOP NOW</button>
      </div>
    </div>
  </div>
  <div className="offers" data-aos="fade-up">
    <div className="offer-item">
      <h3>Money Back</h3>
      <p>30 Days Money Back Guarantee</p>
    </div>
    <div className="offer-item">
      <h3>Free Shipping</h3>
      <p>Shipping on orders over $99</p>
    </div>
    <div className="offer-item">
      <h3>Special Sale</h3>
      <p>Extra $5 off on all items</p>
    </div>
  </div>
</div>

);

export default Slider;
