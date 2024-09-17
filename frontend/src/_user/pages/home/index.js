import React from 'react';
import SideMenu from './Sidebar/SideMenu';
import HotDeals from './Sidebar/HotDeals';
import SpecialOffer from './Sidebar/SpecialOffer';
import Newsletter from './Sidebar/Newsletter';
import Download from './Sidebar/Download';
import Slider from './HomeBannerHolder/Slider';
import NewProduct from './HomeBannerHolder/NewProduct';
import Banner1 from './HomeBannerHolder/Banner1';
import FeaturedProduct from './HomeBannerHolder/FeaturedProduct';
import LatestBlog from './HomeBannerHolder/LatestBlog';
import Banner2 from './HomeBannerHolder/Banner2';
// import '../../../assets/css/home.css';
// import '../../../assets/js/home.js';

const Index = () => (
  <>
    <div className="content">
      <div className="sidebar" data-aos="fade-up">
        <SideMenu />
        <HotDeals />
        <SpecialOffer />
        <SpecialOffer />
        <Newsletter />
        <Download />
      </div> 
      <div className="main-content" data-aos="fade-up">
        <Slider />
        <NewProduct />
        <Banner1 />
        <FeaturedProduct />
        <Banner2 />
        <LatestBlog />
      </div>
    </div>
  </>
);

export default Index;
