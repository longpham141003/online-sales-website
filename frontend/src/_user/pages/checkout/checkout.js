import React, { useState } from 'react';
import '../../../assets/css/user/checkout.css';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';
import Summary from './summary/summary';
import Orderbutton from './summary/orderbutton';
import { CheckoutProvider } from '../../contexts/CheckoutContext';

const Checkout = ({ paymentInfo }) => {
  const [shippingCost, setShippingCost] = useState(30000);

  return (
    <CheckoutProvider>
    <div className="checkout-content">
      <div className="checkout-steps">
        <Step1/>
        <Step2/>
        <Step3 onShippingChange={setShippingCost}/>
        <Step4/>
        <Step5 paymentInfo={paymentInfo} shippingCost={shippingCost}/>
      </div>
      <Summary/>
      <Orderbutton/>
    </div>
    </CheckoutProvider>
  );
};

export default Checkout;
