import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ROUTERS } from "./utils/router.js";
import AdminMain from "./AdminMain.js";
import OrderManagement from "./pages/Order Management/OrderManagement.js";
import CustomerManagement from "./pages/Customer Management/CustomerManagement.js";
import AccountManagement from "./pages/Account Management/AccountManagement.js";
import ProductManagement from "./pages/Product Management/ProductManagement.js";
import PersonnelManagement from "./pages/Personnel Management/PersonnelManagement.js";
import SupplierManager from "./pages/Supplier Manager/SupplierManager.js";
import RevenueReport from "./pages/Revenue Report/RevenueReport.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import AddProduct from "./pages/Product Management/AddProduct.js";
import AddEmployee from "./pages/Personnel Management/AddEmployee.js";
import AddSupplier from "./pages/Supplier Manager/AddSupplier.js";
import AddOrder from "./pages/Order Management/AddOrder.js";
import CategoryManagement from "./pages/Category Management/CategoryManagement/CategoryManagement.js";
import AddMainCategory from "./pages/Category Management/AddCategory/AddMainCategory.js";
import AddExtraCategory from "./pages/Category Management/AddCategory/AddExtraCategory.js";
import AddDetailCategory from "./pages/Category Management/AddCategory/AddDetailCategory.js";
import AdminLogin from "./AdminLogin.js";
import PrivateRoute from "./components/PrivateRoute.js";

const AppAdmin = () => {
  const location = useLocation();
  const Routers = [
    { path: ROUTERS.ADMIN.ORDERMANAGEMENT, Component: OrderManagement, title: "Danh sách đơn hàng" },
    { path: ROUTERS.ADMIN.CUSTOMERMANAGEMENT, Component: CustomerManagement, title: "Danh sách khách hàng" },
    { path: ROUTERS.ADMIN.ACCOUNTMANAGEMENT, Component: AccountManagement, title: "Danh sách tài khoản" },
    { path: ROUTERS.ADMIN.CATEGORYMANAGEMENT, Component: CategoryManagement, title: "Danh sách danh mục" },
    { path: ROUTERS.ADMIN.PRODUCTMANAGEMENT, Component: ProductManagement, title: "Danh sách sản phẩm" },
    { path: ROUTERS.ADMIN.PERSONNELMANAGEMENT, Component: PersonnelManagement, title: "Danh sách nhân viên" },
    { path: ROUTERS.ADMIN.SUPPLIERMANAGER, Component: SupplierManager, title: "Danh sách nhà cung cấp" },
    { path: ROUTERS.ADMIN.REVENUEREPORT, Component: RevenueReport, title: "Báo cáo doanh thu" },
    { path: ROUTERS.ADMIN.DASHBOARD, Component: Dashboard, title: "Bảng điều khiển" },
    { path: ROUTERS.ADMIN.ADDPRODUCT, Component: AddProduct, title: "Thêm sản phẩm" },
    { path: ROUTERS.ADMIN.ADDEMPLOYEE, Component: AddEmployee, title: "Thêm nhân viên" },
    { path: ROUTERS.ADMIN.ADDSUPPLIER, Component: AddSupplier, title: "Thêm nhà cung cấp" },
    { path: ROUTERS.ADMIN.ADDORDER, Component: AddOrder, title: "Thêm đơn hàng" },
    { path: ROUTERS.ADMIN.ADDMAINCATEGORY, Component: AddMainCategory, title: "Thêm danh mục chính" },
    { path: ROUTERS.ADMIN.ADDEXTRACATEGORY, Component: AddExtraCategory, title: "Thêm danh mục phụ" },
    { path: ROUTERS.ADMIN.ADDDETAILCATEGORY, Component: AddDetailCategory, title: "Thêm danh mục chi tiết" },
  ];

  return (
    <Routes>
      {/* Route cho trang đăng nhập */}
      <Route path={ROUTERS.ADMIN.ADMINLOGIN} element={<AdminLogin />} />

      {/* Các route bảo vệ cho trang admin */}
      {Routers.map((item, key) => (
        <Route
          key={key}
          path={item.path}
          element={
            <PrivateRoute
              element={
                <AdminMain title={item.title}>
                  <item.Component />
                </AdminMain>
              }
            />
          }
        />
      ))}
    </Routes>
  );
};

export default AppAdmin;
