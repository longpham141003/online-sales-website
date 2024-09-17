import React, { useState } from "react";
import '../../../../assets/css/admin/categorymanagement.css';
import Button from "../../../components/button";
import ActionToolbar from "../../../components/ActionToolbar";
import Panigation from "../../../components/Panigation";
import CategoryButton from "../CategoryManagement/CategoryButton";
import MainCategory from "../CategoryManagement/MainCategory";
import ExtraCategory from "../CategoryManagement/ExtraCategory";
import DetailCategory from "../CategoryManagement/DetailCategory";
import AddMainCategory from "../AddCategory/AddMainCategory";
import AddExtraCategory from "../AddCategory/AddExtraCategory";
import AddDetailCategory from "../AddCategory/AddDetailCategory"; // Sửa đường dẫn nếu cần

const CategoryManagement = () => {
  const [activeCategory, setActiveCategory] = useState('main');
  const [showAddForm, setShowAddForm] = useState('');

  return (
    <>
      <Button 
        label="Thêm danh mục" 
        onClick={() => setShowAddForm(activeCategory)}
      />
      <div className="body-content">
        <ActionToolbar />
        <div className="main-content">
          <CategoryButton 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
          {activeCategory === 'main' && <MainCategory />}
          {activeCategory === 'sub' && <ExtraCategory />}
          {activeCategory === 'detail' && <DetailCategory />}
          {showAddForm === 'main' && <AddMainCategory />}
          {showAddForm === 'sub' && <AddExtraCategory />}
          {showAddForm === 'detail' && <AddDetailCategory />}
        </div>
        <Panigation />
      </div>
    </>
  );
};

export default CategoryManagement;
