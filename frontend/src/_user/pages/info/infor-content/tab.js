import React from 'react';
import '../../../../assets/css/user/info.css';

const Tab = ({ activeTab, onTabChange }) => {
  return (
    <div className="info-tab">
      <button
        className={`tablinks ${activeTab === 'pending' ? 'active' : ''}`}
        onClick={() => onTabChange('pending')}
      >
        Đơn hàng đang chờ
      </button>
      <button
        className={`tablinks ${activeTab === 'shipping' ? 'active' : ''}`}
        onClick={() => onTabChange('shipping')}
      >
        Đơn hàng đang giao
      </button>
      <button
        className={`tablinks ${activeTab === 'canceled' ? 'active' : ''}`}
        onClick={() => onTabChange('canceled')}
      >
        Đơn hàng đã hủy
      </button>
      <button
        className={`tablinks ${activeTab === 'history' ? 'active' : ''}`}
        onClick={() => onTabChange('history')}
      >
        Lịch sử đơn hàng
      </button>
    </div>
  );
};

export default Tab;
