import React, { useState } from 'react';
import '../../../../assets/css/user/category.css';

// Hàm xử lý thay đổi giá trị nhỏ nhất
const handleMinChange = (e, maxPrice, setMinPrice) => {
  const value = Math.min(Number(e.target.value), maxPrice - 1);
  setMinPrice(value);
};

// Hàm xử lý thay đổi giá trị lớn nhất
const handleMaxChange = (e, minPrice, setMaxPrice) => {
  const value = Math.max(Number(e.target.value), minPrice + 1);
  setMaxPrice(value);
};

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(800);

  return (
    <div className="price-slider-container">
      <h3>Thanh Trượt Giá</h3>
      <div className="price-values">
        <span className="price-min">${minPrice.toFixed(2)}</span>
        <span className="price-max">${maxPrice.toFixed(2)}</span>
      </div>
      <div className="slider">
        <input
          type="range"
          min={0}
          max={1000}
          value={minPrice}
          className="slider-min"
          id="slider-min"
          onChange={(e) => handleMinChange(e, maxPrice, setMinPrice)}
        />
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          className="slider-max"
          id="slider-max"
          onChange={(e) => handleMaxChange(e, minPrice, setMaxPrice)}
        />
      </div>
      <button className="show-now">Xem Ngay</button>
    </div>
  );
};

export default PriceSlider;
