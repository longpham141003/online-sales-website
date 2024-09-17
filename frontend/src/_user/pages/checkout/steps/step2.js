import React, { useEffect } from 'react';
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from 'vn-provinces';
import { useCheckout } from '../../../contexts/CheckoutContext';
import '../../../../assets/css/user/checkout.css';

const Step2 = () => {
  const { shippingInfo, setShippingInfo, errors } = useCheckout();
  const [provinces, setProvinces] = React.useState([]);
  const [districts, setDistricts] = React.useState([]);
  const [wards, setWards] = React.useState([]);

  useEffect(() => {
    setProvinces(getProvinces());
    if (shippingInfo.province) {
      setDistricts(getDistrictsByProvinceCode(shippingInfo.province));
      if (shippingInfo.district) {
        setWards(getWardsByDistrictCode(shippingInfo.district));
      }
    }
  }, [shippingInfo.province, shippingInfo.district]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  return (
    <div id="step2">
      <div className="checkout-step" data-step={2}>
        <div className="number">2</div>
        <div className="step">THÔNG TIN VẬN CHUYỂN</div>
      </div>
      <div className="checkout-content-detail" id="checkout-content-2">
        <div className="billing-info">
          <form>
            <div className="form-group">
              <label htmlFor="billing-name">Tên người nhận:</label>
              <input
                type="text"
                id="billing-name"
                name="name"
                placeholder="Họ và tên đầy đủ của người nhận"
                required
                onChange={handleInputChange}
                value={shippingInfo.name}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="billing-address">Địa chỉ nhận:</label>
              <input
                type="text"
                id="billing-address"
                name="address"
                placeholder="Địa chỉ đầy đủ nơi nhận hàng"
                required
                onChange={handleInputChange}
                value={shippingInfo.address}
                className={errors.address ? 'input-error' : ''}
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
            <div className="form-group">
              <div className="address-dropdowns">
                <div className="dropdown-item">
                  <label htmlFor="province">Tỉnh:</label>
                  <select id="province" name="province" required onChange={handleInputChange} value={shippingInfo.province} className={errors.province ? 'input-error' : ''}>
                    <option value="">Chọn Tỉnh</option>
                    {provinces.map((province) => (
                      <option key={province.code} value={province.code}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                  {errors.province && <span className="error-message">{errors.province}</span>}
                </div>
                <div className="dropdown-item">
                  <label htmlFor="district">Huyện:</label>
                  <select
                    id="district"
                    name="district"
                    required
                    value={shippingInfo.district}
                    onChange={handleInputChange}
                    disabled={!districts.length}
                    className={errors.district ? 'input-error' : ''}
                  >
                    <option value="">Chọn Huyện</option>
                    {districts.map((district) => (
                      <option key={district.code} value={district.code}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                  {errors.district && <span className="error-message">{errors.district}</span>}
                </div>
                <div className="dropdown-item">
                  <label htmlFor="ward">Xã:</label>
                  <select id="ward" name="ward" required disabled={!wards.length} onChange={handleInputChange} value={shippingInfo.ward} className={errors.ward ? 'input-error' : ''}>
                    <option value="">Chọn Xã</option>
                    {wards.map((ward) => (
                      <option key={ward.code} value={ward.code}>
                        {ward.name}
                      </option>
                    ))}
                  </select>
                  {errors.ward && <span className="error-message">{errors.ward}</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="billing-phone">Số điện thoại:</label>
              <input
                type="tel"
                id="billing-phone"
                name="phone"
                placeholder="Số điện thoại liên hệ của người nhận"
                required
                onChange={handleInputChange}
                value={shippingInfo.phone}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="shipping-notes">Ghi chú giao hàng:</label>
              <textarea
                id="shipping-notes"
                name="notes"
                placeholder="Các hướng dẫn đặc biệt hoặc yêu cầu thêm về việc giao hàng"
                defaultValue={shippingInfo.notes}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;
