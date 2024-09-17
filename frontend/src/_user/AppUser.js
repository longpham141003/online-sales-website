import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router.js";
import UserMain from "./UserMain.js";  // Đảm bảo import đúng UserMain
import Index from "./pages/home/index.js";  
import Category from "./pages/category/category.js";  
import Detail from "./pages/Detail/detail.js";
import Cart from "./pages/cart/cart.js";
import Login from "./pages/login/login.js";
import Checkout from "./pages/checkout/checkout.js";
import { CartProvider } from './contexts/CartContext.js';
import OrderSuccess from "./pages/order-success/order-success.js";
import Info from "./pages/info/info.js";

const AppUser = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);

  const Routers = [
    { path: ROUTERS.USER.HOME, Component: Index },
    { path: ROUTERS.USER.CATEGORY, Component: Category },
    { path: ROUTERS.USER.DETAIL, Component: Detail },
    { path: ROUTERS.USER.CART, Component: (props) => <Cart {...props} setPaymentInfo={setPaymentInfo} /> },
    { path: ROUTERS.USER.LOGIN, Component: Login },
    { path: ROUTERS.USER.CHECKOUT, Component: (props) => <Checkout {...props} paymentInfo={paymentInfo} /> },
    { path: ROUTERS.USER.ORDERSUCCESS, Component: OrderSuccess },
    { path: ROUTERS.USER.INFO, Component: Info },
  ];

  return (
    <UserMain>
      <CartProvider>
        <Routes>
          {Routers.map((item, key) => (
            <Route key={key} path={item.path} element={<item.Component />} />
          ))}
        </Routes>
      </CartProvider>
    </UserMain>
  );
};

export default AppUser;
