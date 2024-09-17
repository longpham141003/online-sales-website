import React, { useState, useEffect } from "react";
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from '../../../services/locationService';
import axios from 'axios';
import '../../../assets/css/admin/addsupplier.css';
import Button from "../../components/button";
import ActionToolbar from "../../components/ActionToolbar";
import Panigation from "../../components/Panigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSupplier = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await getProvinces();
        setProvinces(data);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách tỉnh/thành phố:', error);
      }
    };

    fetchProvinces();
  }, []);

  const handleProvinceChange = async (e) => {
    const provinceCode = e.target.value;
    setSelectedProvince(provinceCode);
    setSelectedDistrict(''); // Reset district when province changes
    setSelectedWard(''); // Reset ward when province changes

    try {
      const data = await getDistrictsByProvinceCode(provinceCode);
      setDistricts(data);
      setWards([]); // Clear wards when province changes
    } catch (error) {
      console.error('Lỗi khi lấy danh sách huyện/quận:', error);
    }
  };

  const handleDistrictChange = async (e) => {
    const districtCode = e.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard(''); // Reset ward when district changes

    try {
      const data = await getWardsByDistrictCode(districtCode);
      setWards(data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách xã/phường:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
  
    if (!token) {
      console.error('Token không tồn tại. Vui lòng đăng nhập lại.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/suppliers', {
        name,
        phone,
        email,
        address: `${address}, ${selectedWard}, ${selectedDistrict}, ${selectedProvince}`,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`, // Gửi token trong header
        }
      });

      // Hiển thị thông báo thành công
      toast.success('Thêm nhà cung cấp thành công!');
      
      console.log('Nhà cung cấp đã được thêm:', response.data);
    } catch (error) {
      console.error('Lỗi khi thêm nhà cung cấp:', error.response ? error.response.data : error.message);
      if (error.response?.status === 401) {
        // Thực hiện hành động khi nhận lỗi 401, như redirect đến trang đăng nhập
        console.error('Token hết hạn hoặc không hợp lệ.');
      }
    }
  };
  
  return (
    <div className="supplier-create-new">
      <h3 className="supplier-section-title">Tạo mới nhà cung cấp</h3>
      <form className="supplier-form" onSubmit={handleSubmit}>
        <div className="supplier-form-group">
          <label htmlFor="supplier-name">Tên nhà cung cấp</label>
          <input 
            type="text" 
            id="supplier-name" 
            placeholder="Tên nhà cung cấp" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="supplier-form-group">
          <label htmlFor="supplier-phone">Số điện thoại</label>
          <input 
            type="text" 
            id="supplier-phone" 
            placeholder="Số điện thoại" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="supplier-form-group">
          <label htmlFor="supplier-email">Email</label>
          <input 
            type="email" 
            id="supplier-email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: 'calc(100% - 8px)' }} // Kéo dài cột email
          />
        </div>
        <div className="supplier-location-wrapper" style={{ display: 'flex', gap: '8px' }}>
          <div className="supplier-form-group" style={{ flex: '0 1 160px' }}>
            <label htmlFor="supplier-province">Tỉnh/Thành phố</label>
            <select 
              id="supplier-province" 
              onChange={handleProvinceChange}
              value={selectedProvince}
              required
              style={{ width: '100%' }} 
            >
              <option value="">Chọn Tỉnh/Thành phố</option>
              {provinces.map(province => (
                <option key={province.code} value={province.code}>{province.name}</option>
              ))}
            </select>
          </div>
          <div className="supplier-form-group" style={{ flex: '0 1 160px' }}>
            <label htmlFor="supplier-district">Huyện</label>
            <select 
              id="supplier-district" 
              onChange={handleDistrictChange}
              value={selectedDistrict}
              disabled={!selectedProvince} // Disable if no province is selected
              required
              style={{ width: '100%' }} 
            >
              <option value="">Chọn Huyện</option>
              {districts.map(district => (
                <option key={district.code} value={district.code}>{district.name}</option>
              ))}
            </select>
          </div>
          <div className="supplier-form-group" style={{ flex: '0 1 160px' }}>
            <label htmlFor="supplier-ward">Xã</label>
            <select 
              id="supplier-ward" 
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
              disabled={!selectedDistrict} // Disable if no district is selected
              required
              style={{ width: '100%' }} 
            >
              <option value="">Chọn Xã</option>
              {wards.map(ward => (
                <option key={ward.code} value={ward.code}>{ward.name}</option>
              ))}
            </select>
          </div>
          <div className="supplier-form-group" style={{ flex: '1' }}>
            <label htmlFor="supplier-address">Địa chỉ chi tiết</label>
            <input 
              type="text" 
              id="supplier-address" 
              placeholder="Địa chỉ chi tiết" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '100%' }} // Địa chỉ chi tiết dài hơn các trường khác
            />
          </div>
        </div>
        <div className="supplier-form-actions">
          <button type="submit" className="supplier-btn supplier-btn-save">
            Lưu lại
          </button>
          <button type="button" className="supplier-btn supplier-btn-cancel">
            Hủy bỏ
          </button>
        </div>
      </form>
      
      {/* Container để hiển thị thông báo */}
      <ToastContainer />
    </div>
  );
};

export default AddSupplier;
