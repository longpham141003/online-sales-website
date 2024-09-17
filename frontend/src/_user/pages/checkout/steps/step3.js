import React, { useEffect } from 'react';
import { useCheckout } from '../../../contexts/CheckoutContext';
import '../../../../assets/css/user/checkout.css';

const Step3 = () => {
  const { shippingMethod, setShippingMethod, errors } = useCheckout();

  const handleShippingChange = (e) => {
    const { value } = e.target;
    let cost;
    switch (value) {
      case 'express':
        cost = 50000;
        break;
      case 'special':
        cost = 70000;
        break;
      default:
        cost = 30000;
        break;
    }
    setShippingMethod(value);
    localStorage.setItem('shippingCost', cost);
    localStorage.setItem('shippingMethod', value);
  };

  return (
    <div id="step3">
      <div className="checkout-step" data-step={3}>
        <div className="number">3</div>
        <div className="step">PHƯƠNG PHÁP VẬN CHUYỂN</div>
      </div>
      <div className="checkout-content-detail" id="checkout-content-3">
        <div className="shipping-method">
          <form>
            <div className="form-group">
              <label>Tùy chọn vận chuyển:</label>
              {errors.shippingMethod && <div className="error-message">{errors.shippingMethod}</div>}
              <div className="shipping-option">
                <div className="shipping-info">
                  <span>Giao hàng tiêu chuẩn (3-5 ngày):</span>
                  <span>30,000 VND</span>
                </div>
                <input
                  type="radio"
                  id="standard"
                  name="shipping-method"
                  value="standard"
                  checked={shippingMethod === 'standard'}
                  onChange={handleShippingChange}
                />
              </div>
              <div className="shipping-option">
                <div className="shipping-info">
                  <span>Giao hàng nhanh (1-2 ngày):</span>
                  <span>50,000 VND</span>
                </div>
                <input
                  type="radio"
                  id="express"
                  name="shipping-method"
                  value="express"
                  checked={shippingMethod === 'express'}
                  onChange={handleShippingChange}
                />
              </div>
              <div className="shipping-option">
                <div className="shipping-info">
                  <span>Giao hàng đặc biệt (1 ngày):</span>
                  <span>70,000 VND</span>
                </div>
                <input
                  type="radio"
                  id="special"
                  name="shipping-method"
                  value="special"
                  checked={shippingMethod === 'special'}
                  onChange={handleShippingChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;
