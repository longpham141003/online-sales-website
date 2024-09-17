import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => {
  const scrollToStep = (stepId) => {
    document.getElementById(stepId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="checkout-summary">
      <p>TIẾN TRÌNH THANH TOÁN CỦA BẠN</p>
      <ul>
        <Link><li onClick={() => scrollToStep('step1')}>Phương thức kiểm tra</li></Link>
        <Link><li onClick={() => scrollToStep('step2')}>Thông tin vận chuyển</li></Link>
        <Link><li onClick={() => scrollToStep('step3')}>Phương pháp vận chuyển</li></Link>
        <Link><li onClick={() => scrollToStep('step5')}>Phương thức thanh toán</li></Link>
        <Link><li onClick={() => scrollToStep('step4')}>Thông tin thanh toán</li></Link>
      </ul>
    </div>
  );
};

export default Summary;
