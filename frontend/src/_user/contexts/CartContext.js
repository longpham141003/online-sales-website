import React, { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartItems(response.data);
      setUpdatedCartItems(response.data); // Khởi tạo updatedCartItems với giá trị ban đầu
    } catch (error) {
      console.error('Lỗi khi tải giỏ hàng:', error);
    }
  };

  const addToCart = async (productId, quantity, color) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/cart', {
        productId,
        quantity,
        color
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCartItems(); // Cập nhật giỏ hàng sau khi thêm sản phẩm
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
    }
  };

  const updateCartItem = async (itemId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:3000/api/cart/${itemId}`, {
        quantity
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCartItems(); // Cập nhật giỏ hàng sau khi cập nhật số lượng sản phẩm
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm trong giỏ hàng:', error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/cart/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCartItems(); // Cập nhật giỏ hàng sau khi xóa sản phẩm
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete('http://localhost:3000/api/cart', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartItems([]);
    } catch (error) {
      console.error('Lỗi khi xóa toàn bộ giỏ hàng:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, updatedCartItems, setUpdatedCartItems, addToCart, updateCartItem, removeFromCart, clearCart, fetchCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
