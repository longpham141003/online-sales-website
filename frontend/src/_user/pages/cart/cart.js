import React, { useState } from 'react';
import '../../../assets/css/user/cart.css';
import CartTable from './CartTable';
import CartButton from './CartButton';
import CartFooter from './CartFooter';

const Cart = ({ setPaymentInfo }) => {
  const [cartUpdated, setCartUpdated] = useState(false);

  return (
    <div className="cart-main-content">
      <CartTable setCartUpdated={setCartUpdated} />
      <CartButton setCartUpdated={setCartUpdated} />
      <CartFooter cartUpdated={cartUpdated} setPaymentInfo={setPaymentInfo} />
    </div>
  );
};

export default Cart;
