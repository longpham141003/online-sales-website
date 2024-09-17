import React from 'react';
import '../../../../assets/css/user/home.css';
import '../../../../assets/js/home.js';
const HotDeals = () => ( 
<div className="hot-deals" data-aos="fade-up">
  <h2 className="sidebar-title">HOT DEALS</h2>
  <div className="deal-item">
    <div className="discount-tag">49% OFF</div>
    <img src="assets/images/hot-deals/p25.jpg" alt="Hot Deal 1" />
    <div className="countdown">
      <div className="time">
        <span className="days">120</span>
        <span className="label">DAYS</span>
      </div>
      <div className="time">
        <span className="hours">20</span>
        <span className="label">HRS</span>
      </div>
      <div className="time">
        <span className="mins">36</span>
        <span className="label">MINS</span>
      </div>
      <div className="time">
        <span className="secs">60</span>
        <span className="label">SEC</span>
      </div>
    </div>
    <p>Floral Print Buttoned</p>
    <div className="ratings">
      <span>★★★★☆</span>
    </div>
    <p className="price">
      $600.00 <span className="discount">$800.00</span>
    </p>
    <button className="add-to-cart">
      <i style={{ color: "yellow" }} className="fas fa-shopping-cart" /> Add to
      cart
    </button>
  </div>
</div>

);

export default HotDeals;
