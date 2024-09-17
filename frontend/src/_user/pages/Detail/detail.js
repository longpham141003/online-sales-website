import React from 'react';
import HomeBanner from './Sidebar/HomeBanner';
import HotDeals from './Sidebar/HotDeals';
import Newsletter from './Sidebar/Newsletter';
import ProductInfo from './ProductDetails/ProductInfo';
import RelatedProducts from './ProductDetails/RelatedProducts';
import ProductTabs from './ProductDetails/ProductTabs';
import '../../../assets/css/user/detail.css';

const Detail = () => (
  <>
    <div className="detail-main-content">
      <div className="detail-sidebar">
        <HomeBanner />
        <HotDeals />
        <Newsletter />
      </div>
      <div className="detail-content">
        <ProductInfo />
        <ProductTabs />
        <RelatedProducts />
      </div>
    </div>
  </>
);

export default Detail;
