import React from 'react';
import { CategoryProvider } from '../../contexts/CategoryContext';
import { CartProvider } from '../../contexts/CartContext';
import SideMenu from './Sidebar/SideMenu';
import PriceSlider from './Sidebar/PriceSlider';
import ProductsGrid from './Content/ProductsGrid';
import Pagination from './Content/Pagination';

const Category = () => (
  <CategoryProvider>
    <CartProvider>
      <div className="category-content">
        <div className="category-sidebar">
          <SideMenu />
          <PriceSlider />
        </div>
        <div className="category-main-content">
          <Pagination />
          <ProductsGrid />
        </div>
      </div>
    </CartProvider>
  </CategoryProvider>
);

export default Category;
