import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../../../assets/css/user/cart.css';
import { Link } from 'react-router-dom';
const CartButton = ({ setCartUpdated }) => {
  const { fetchCartItems, updatedCartItems, setCartItems } = useContext(CartContext);

  const handleUpdateCart = async () => {
    await fetchCartItems();
    setCartItems(updatedCartItems); // Cập nhật cartItems với giá trị của updatedCartItems
    setCartUpdated(true);
  };

  return (
    <div className="cart-buttons">
      <Link to="/category"><button className="cart-button continue-shopping">CONTINUE SHOPPING</button></Link>
      <button className="cart-button update-cart" onClick={handleUpdateCart}>UPDATE SHOPPING CART</button>
    </div>
  );
};

export default CartButton;
