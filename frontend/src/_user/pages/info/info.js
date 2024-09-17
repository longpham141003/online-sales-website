import React, { useState } from 'react';
import AccountInfo from './infor-content/account-info';
import Tab from './infor-content/tab';
import Pending from './infor-content/pending';
import Shipping from './infor-content/shipping';
import History from './infor-content/history';
import Canceled from './infor-content/canceled';
import '../../../assets/css/user/info.css';
import InfoDetail from './info-detail/info-detail';

const Info = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleViewDetail = (order) => {
    setSelectedOrder(order);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      <div className="info-content">
        <AccountInfo />
        <div className="order-info">
          <h2>Thông tin đơn hàng</h2>
          <Tab activeTab={activeTab} onTabChange={handleTabChange} />
          {activeTab === 'pending' && <Pending onViewDetail={handleViewDetail} />}
          {activeTab === 'shipping' && <Shipping />}
          {activeTab === 'canceled' && <Canceled />}
          {activeTab === 'history' && <History />}
        </div>
      </div>
      {showDetail && <InfoDetail onClose={handleCloseDetail} order={selectedOrder} />}
    </div>
  );
};

export default Info;
