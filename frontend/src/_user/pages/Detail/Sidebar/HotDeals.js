import React from 'react';
import '../../../../assets/css/user/detail.css';

const HotDeals = () => (
  <div className="detail-hotdeals">
    <div className="detail-title">
      <h4>
        HOT DEALS
        <hr />
      </h4>
    </div>
    <div className="detail-deal-product">
      <img src="assets/images/hot-deals/p5.jpg" alt="Hot Deal Product" />
      <div className="detail-price-hotdeals">
        <span>Floral Print Buttoned</span>
        <span>★★★★☆</span>
        <p className="detail-price">
          $600.00 <span className="detail-discount">$800.00</span>
        </p>
        <button className="detail-add-to-cart">
          <i style={{ color: "yellow" }} className="fas fa-shopping-cart" /> Add
          to cart
        </button>
      </div>
    </div>
  </div>
);

export default HotDeals;
