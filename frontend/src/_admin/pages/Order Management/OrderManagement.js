import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../assets/css/admin/ordermanagement.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage hoặc context/session
        const response = await axios.get('http://localhost:3000/api/orders/all', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Dữ liệu đơn hàng:', response.data); // In ra dữ liệu để kiểm tra
        setOrders(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu đơn hàng:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };
  
    fetchOrders();
  }, []);

  return (
    <>
      <Button label="Thêm đơn hàng"/>
      <div className="body-content">
        <ActionToolbar/>
        <div className="data-content">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>ID đơn hàng</th>
                <th>Khách hàng</th>
                <th style={{ width: '400px' }}>Đơn hàng</th>
                <th style={{ width: '150px', textAlign: 'center' }}>Thời gian mua</th>
                <th>Tổng tiền</th>
                <th style={{ width: '240px' }}>Tình trạng</th>
                <th>Tính năng</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="8">{error}</td>
                </tr>
              ) : orders.length > 0 ? (
                orders.map(order => (
                  <tr key={order._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{order.shortOrderCode}</td>
                    <td>{order.user.hoTen}</td>
                    {/* Hiển thị tên sản phẩm */}
                    <td>{order.items.map(item => item.product.tenSanPham).join(', ')}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td> {/* Cập nhật đây */}
                    <td>{order.totalAmount.toLocaleString()}</td>
                    <td>{order.status}</td>
                    <td>
                      <button className="btn btn-delete">
                        <i className="fas fa-trash" />
                      </button>
                      <button className="btn btn-edit">
                        <i className="fas fa-edit" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Không có dữ liệu đơn hàng</td>
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

export default OrderManagement;
