import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../../../assets/css/user/cart.css';
import { Link } from 'react-router-dom';

const CartFooter = ({ cartUpdated, setPaymentInfo }) => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  const handleProceedCheckout = () => {
    setPaymentInfo(cartItems); // Cập nhật thông tin thanh toán
    localStorage.setItem('paymentInfo', JSON.stringify(cartItems)); // Lưu thông tin thanh toán vào localStorage
  };

  return (
    <div className="cart-footer">
      <div className="cart-column">
        <h3>Mã giảm giá</h3>
        <p>Nhập mã phiếu giảm giá nếu bạn có.</p>
        <form>
          <input type="text" placeholder="Phiếu giảm giá của bạn.." />
          <button className="cart-button apply-coupon">ÁP DỤNG COUPON</button>
        </form>
      </div>
      {cartUpdated && (
        <div className="cart-column" style={{ gridColumn: "span 2" }}>
          <h3>Tổng cộng</h3>
          <table className="cart-details">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item._id}>
                  <td>{item.product.tenSanPham}</td>
                  <td>{item.quantity}</td>
                  <td>${item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>
              Tổng cộng: <span>${calculateTotal()}</span>
            </p>
          </div>
          <Link to="/checkout">
            <button className="cart-button proceed-checkout" onClick={handleProceedCheckout}>
              TIẾN HÀNH THANH TOÁN
            </button>
          </Link>
          <p>Thanh toán bằng nhiều địa chỉ!</p>
        </div>
      )}
    </div>
  );
};

export default CartFooter;
