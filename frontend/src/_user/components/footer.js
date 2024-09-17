import React from "react";

const Footer = () => (
<footer>
  <div className="footer-container">
    <div className="footer-section contact-us">
      <h3>CONTACT US</h3>
      <p>
        <i className="fas fa-map-marker-alt" /> ThemesGround, 789 Main rd,
        <br /> Anytown, CA 12345 USA
      </p>
      <p>
        <i className="fas fa-phone-alt" /> +(888) 123-4567
        <br /> +(888) 456-7890
      </p>
      <p>
        <i className="fas fa-envelope" /> flipmart@themesground.com
      </p>
    </div>
    <div className="footer-section customer-service">
      <h3>CUSTOMER SERVICE</h3>
      <ul>
        <li>
          <a href="#">My Account</a>
        </li>
        <li>
          <a href="#">Order History</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Specials</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
      </ul>
    </div>
    <div className="footer-section corporation">
      <h3>CORPORATION</h3>
      <ul>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Advanced Search</a>
        </li>
      </ul>
    </div>
    <div className="footer-section why-choose-us">
      <h3>WHY CHOOSE US</h3>
      <ul>
        <li>
          <a href="#">Shopping Guide</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Company</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="social-media-icons">
      <a href="#" className="social-icon facebook">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#" className="social-icon twitter">
        <i className="fab fa-twitter" />
      </a>
      <a href="#" className="social-icon google-plus">
        <i className="fab fa-google-plus-g" />
      </a>
      <a href="#" className="social-icon rss">
        <i className="fas fa-rss" />
      </a>
      <a href="#" className="social-icon pinterest">
        <i className="fab fa-pinterest-p" />
      </a>
      <a href="#" className="social-icon linkedin">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="#" className="social-icon youtube">
        <i className="fab fa-youtube" />
      </a>
    </div>
    <div className="payment-methods">
      <img src="assets/images/payments/1.png" alt="PayPal" />
      <img src="assets/images/payments/2.png" alt="Visa" />
      <img src="assets/images/payments/3.png" alt="MasterCard" />
      <img src="assets/images/payments/4.png" alt="Discover" />
    </div>
  </div>
</footer>

);

export default Footer;
