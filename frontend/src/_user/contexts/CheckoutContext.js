import React, { createContext, useState, useContext } from 'react';

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

export const CheckoutProvider = ({ children }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    province: '',
    district: '',
    ward: '',
    phone: '',
  });

  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!shippingInfo.name) newErrors.name = 'Tên người nhận là bắt buộc.';
    if (!shippingInfo.address) newErrors.address = 'Địa chỉ nhận là bắt buộc.';
    if (!shippingInfo.province) newErrors.province = 'Tỉnh là bắt buộc.';
    if (!shippingInfo.district) newErrors.district = 'Huyện là bắt buộc.';
    if (!shippingInfo.ward) newErrors.ward = 'Xã là bắt buộc.';
    if (!shippingInfo.phone) newErrors.phone = 'Số điện thoại là bắt buộc.';
    if (!shippingMethod) newErrors.shippingMethod = 'Phương thức vận chuyển là bắt buộc.';
    if (!paymentMethod) newErrors.paymentMethod = 'Phương thức thanh toán là bắt buộc.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (validate()) {
      alert('Đặt hàng thành công');
      console.log('Đặt hàng thành công với thông tin:', {
        shippingInfo,
        shippingMethod,
        paymentMethod,
      });
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        shippingInfo,
        setShippingInfo,
        shippingMethod,
        setShippingMethod,
        paymentMethod,
        setPaymentMethod,
        errors,
        handleOrder,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
