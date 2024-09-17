import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../../../assets/css/user/category.css';
import { CategoryContext, ProductContext } from '../../../contexts/CategoryContext';

const Pagination = () => {
  const [grandchildCategories, setGrandchildCategories] = useState([]);
  const { selectedChildCategory } = useContext(CategoryContext);
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    if (selectedChildCategory) {
      axios.get(`http://localhost:3000/api/grandchild-categories/by-child/${selectedChildCategory}`)
        .then(response => {
          setGrandchildCategories(response.data);
        })
        .catch(error => {
          console.error("Có lỗi xảy ra khi lấy danh mục cháu:", error);
        });
    } else {
      setGrandchildCategories([]);
    }
  }, [selectedChildCategory]);

  const handleGrandchildCategoryChange = (event) => {
    const selectedGrandchildCategory = event.target.value;

    if (selectedGrandchildCategory === "all") {
      setProducts([]);
    } else {
      axios.get(`http://localhost:3000/api/products/by-grandchild-category/${selectedGrandchildCategory}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error("Có lỗi xảy ra khi lấy sản phẩm:", error);
        });
    }
  };

  return (
    <div className="category-toolbar">
      <div className="sort-options">
        <label htmlFor="sort-by">Danh mục</label>
        <select id="sort-by" onChange={handleGrandchildCategoryChange}>
          <option value="all">Tất cả</option>
          {grandchildCategories.map(category => (
            <option key={category._id} value={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
