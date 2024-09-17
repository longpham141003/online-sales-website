import React, { useState, useEffect } from 'react';
import '../../../../assets/css/user/checkout.css';

const Step5 = ({ paymentInfo, shippingCost }) => {
  const [paymentData, setPaymentData] = useState(paymentInfo);

  useEffect(() => {
    const storedPaymentInfo = localStorage.getItem('paymentInfo');
    if (storedPaymentInfo) {
      setPaymentData(JSON.parse(storedPaymentInfo));
    }
  }, []);

  const calculateTotal = () => {
    const itemTotal = paymentData.reduce((total, item) => total + item.total, 0);
    return itemTotal + shippingCost;
  };

  return (
    <div id="step5">
      <div className="checkout-step" data-step={5}>
        <div className="number">5</div>
        <div className="step">THÔNG TIN THANH TOÁN</div>
      </div>
      <div className="checkout-content-detail" id="checkout-content-5">
        <div className="payment-info">
          <table>
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map(item => (
                <tr key={item._id}>
                  <td>{item.product.tenSanPham}</td>
                  <td>{item.quantity}</td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-amount">
            <p>Phí vận chuyển: {shippingCost} VND</p>
            <p>Tổng cộng: ${calculateTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
