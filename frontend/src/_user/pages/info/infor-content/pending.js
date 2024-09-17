import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../assets/css/user/info.css';

const Pending = ({ onViewDetail }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div id="info-pending-orders" className="tabcontent info-pending-orders active">
      <h3>Đơn hàng đang chờ</h3>
      <table className="pending-orders-table">
        <thead>
          <tr>
            <th>Trạng thái</th>
            <th>Mã đơn hàng</th>
            <th>Thời gian mua</th>
            <th>Tổng tiền</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.status}</td>
              <td>{order.shortOrderCode}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                <i className="fas fa-eye" onClick={() => onViewDetail(order)}></i> Xem chi tiết
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pending;
