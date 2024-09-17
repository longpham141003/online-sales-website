import React from 'react';
import '../../../../assets/css/user/detail.css';

const Newsletter = () => (
  <div className="detail-newsletter">
    <h4>
      NEWSLETTERS <hr />
    </h4>
    <p>Sign Up for Our Newsletter!</p>
    <input type="email" placeholder="Subscribe to our newsletter" />
    <button>Subscribe</button>
  </div>
);

export default Newsletter;
