import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import '../../../assets/css/user/cart.css';

const CartTable = ({ setCartUpdated }) => {
  const { updatedCartItems, setUpdatedCartItems, removeFromCart, updateCartItem, fetchCartItems } = useContext(CartContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleQuantityChange = (itemId, quantity) => {
    const newUpdatedCartItems = updatedCartItems.map(item =>
      item._id === itemId ? { ...item, quantity: parseInt(quantity), total: item.price * parseInt(quantity) } : item
    );
    setUpdatedCartItems(newUpdatedCartItems);
    setCartUpdated(false); // Đặt lại trạng thái khi cập nhật số lượng
  };

  return (
    <div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Remove</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Edit</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Grandtotal</th>
          </tr>
        </thead>
        <tbody>
          {updatedCartItems.map(item => (
            <tr key={item._id}>
              <td>
                <i className="fas fa-trash-alt" onClick={() => removeFromCart(item._id)} />
              </td>
              <td>
                <img
                  src={`http://localhost:3000/${item.product.image}`}
                  alt={item.product.tenSanPham}
                  className="cart-product-image"
                />
              </td>
              <td>
                <div className="cart-product-name">
                  <span>{item.product.tenSanPham}</span>
                  <div className="cart-rating">★★★★☆ (06 Reviews)</div>
                  <div className="cart-product-color">COLOR: {item.color}</div>
                </div>
              </td>
              <td className="cart-edit-column">
                <a href="#">Edit</a>
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="cart-quantity-input"
                  onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                />
              </td>
              <td>${item.price}</td>
              <td>${item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
