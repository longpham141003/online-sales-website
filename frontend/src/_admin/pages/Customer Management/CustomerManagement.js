import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../../../assets/css/admin/customermanagement.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/customers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });

        console.log(response.data);

        setCustomers(response.data);

      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu khách hàng:', error);
        setError('Lỗi khi lấy dữ liệu khách hàng');
      }
    };

    fetchCustomers();
  }, []);

  return (
    <>
      <Button label="Thêm khách hàng"/>
      <div className="body-content">
        <ActionToolbar/>
        <div className="data-content">
          <table>
            <thead>
              <tr>
                <th style={{ width: '120px' }}>Mã khách hàng</th>
                <th style={{ width: '400px' }}>Tên đầy đủ</th>
                <th>Số điện thoại</th>
                <th style={{ width: '180px' }}>Số đơn hàng</th>
                <th>Thời gian mua hàng gần nhất</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="6">{error}</td>
                </tr>
              ) : customers.length > 0 ? (
                customers.map(customer => (
                  <tr key={customer.userCode}>
                    <td>{customer.userCode}</td>
                    <td>{customer.hoTen}</td>
                    <td>{customer.soDienThoai}</td>
                    <td>{customer.orderCount}</td>
                    <td>{customer.lastPurchase ? new Date(customer.lastPurchase).toLocaleString() : 'Chưa có'}</td>
                    <td>
                      <button className="btn btn-edit">
                        <i className="fas fa-edit" />
                      </button>
                      <button className="btn btn-delete">
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Không có dữ liệu khách hàng</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Panigation/>
      </div>
    </>
  );
};

export default CustomerManagement;
