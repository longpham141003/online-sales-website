import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../assets/css/admin/suppliermanager.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const token = localStorage.getItem('token'); // Hoặc lấy từ context/session
        const response = await axios.get('http://localhost:3000/api/suppliers', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Dữ liệu nhà cung cấp:', response.data); // In ra dữ liệu để kiểm tra
        setSuppliers(response.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu nhà cung cấp:', error);
        setError(error.response?.data?.message || 'Lỗi không xác định');
      }
    };
  
    fetchSuppliers();
  }, []);

  return (
    <>
      <Button label="Thêm nhà cung cấp"/>
      <div className="body-content">
        <ActionToolbar/>
        <div className="data-content">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th style={{ width: '100px'}}>Mã nhà cung cấp</th>
                <th style={{ width: '100x'}}>Tên nhà cung cấp</th>
                <th style={{ width: '480px'}}>Địa chỉ</th>
                <th style={{ width: '120px'}}>Số điện thoại</th>
                <th style={{ width: '300px'}}>Email</th>
                <th style={{ width: '100px'}}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="7">{error}</td>
                </tr>
              ) : suppliers.length > 0 ? (
                suppliers.map(supplier => (
                  <tr key={supplier._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td style={{ width: '100px'}}>{supplier.supplierCode}</td>
                    <td style={{ width: '100x'}}>{supplier.name}</td>
                    <td style={{ width: '375px'}}>{supplier.address}</td>
                    <td style={{ width: '120px'}}>{supplier.phone}</td>
                    <td style={{ width: '300px'}}>{supplier.email}</td>
                    <td style={{ width: '100px'}}>
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
                  <td colSpan="7">Không có dữ liệu nhà cung cấp</td>
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

export default SupplierManagement;
