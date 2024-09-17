// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Kiểm tra token

  return isAuthenticated ? React.cloneElement(element, rest) : <Navigate to="/admin/adminlogin" />;
};

export default PrivateRoute;
