import React from "react";
import '../../../../assets/css/admin/categorymanagement.css';

const CategoryButton = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="category-buttons">
      <button 
        className={`btn-category ${activeCategory === 'main' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('main')}
      >
        <span className="category-number">1</span> Danh mục chính
      </button>
      <button 
        className={`btn-category ${activeCategory === 'sub' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('sub')}
      >
        <span className="category-number">2</span> Danh mục phụ
      </button>
      <button 
        className={`btn-category ${activeCategory === 'detail' ? 'active' : ''}`} 
        onClick={() => setActiveCategory('detail')}
      >
        <span className="category-number">3</span> Danh mục chi tiết
      </button>
    </div>
  );
};

export default CategoryButton;
