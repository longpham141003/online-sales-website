import React, { useEffect } from 'react';
import { useCheckout } from '../../../contexts/CheckoutContext';
import '../../../../assets/css/user/checkout.css';

const Step4 = () => {
  const { paymentMethod, setPaymentMethod, errors } = useCheckout();

  const handlePaymentChange = (e) => {
    const { value } = e.target;
    setPaymentMethod(value);
    localStorage.setItem('paymentMethod', value);
  };

  return (
    <div id="step4">
      <div className="checkout-step" data-step={4}>
        <div className="number">4</div>
        <div className="step">PHƯƠNG THỨC THANH TOÁN</div>
      </div>
      <div className="checkout-content-detail" id="checkout-content-4">
        <div className="payment-method">
          <form>
          {errors.paymentMethod && <div className="error-message">{errors.paymentMethod}</div>}
            <div className="form-group">
              <div className="payment-method">
                <div className="payment-option" tabIndex={0}>
                  <label htmlFor="cod">Thanh toán khi nhận hàng</label>
                  <input
                    type="radio"
                    id="cod"
                    name="payment-method"
                    value="cod"
                    onChange={handlePaymentChange}
                    checked={paymentMethod === 'cod'}
                  />
                </div>
                <div className="payment-option" tabIndex={0}>
                  <label htmlFor="online">Thanh toán online</label>
                  <input
                    type="radio"
                    id="online"
                    name="payment-method"
                    value="online"
                    onChange={handlePaymentChange}
                    checked={paymentMethod === 'online'}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step4;
