import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../../../contexts/CheckoutContext';
import axios from 'axios';

const OrderButton = () => {
  const { shippingInfo, paymentMethod, shippingMethod, setErrors } = useCheckout();
  const navigate = useNavigate();

  const handleOrder = async () => {
    try {
      const token = localStorage.getItem('token'); // Giả sử token được lưu trong localStorage
      const response = await axios.post(
        'http://localhost:3000/api/orders',
        {
          recipientName: shippingInfo.name,
          address: {
            province: shippingInfo.province,
            district: shippingInfo.district,
            ward: shippingInfo.ward,
            detail: shippingInfo.address
          },
          phone: shippingInfo.phone,
          note: shippingInfo.notes,
          shippingMethod,
          paymentMethod
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      // Chuyển hướng đến trang xác nhận hoặc trang đơn hàng
      navigate('/order-success', { state: { order: response.data } });
    } catch (error) {
      console.error('Error placing order:', error);
      setErrors(prevErrors => ({ ...prevErrors, order: 'Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại sau.' }));
    }
  };

  return (
    <div className="order-button">
      <button onClick={handleOrder}>Đặt Hàng</button>
    </div>
  );
};

export default OrderButton;
