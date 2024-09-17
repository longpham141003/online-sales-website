import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SideMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/parent-categories');
        setCategories(response.data);
      } catch (error) {
        console.error("There was an error fetching the categories!", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="categories">
      <h2 className="sidebar-title">
        <i className="fas fa-bars" /> CATEGORIES
      </h2>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category._id}>
            <i style={{ color: "#666666" }} className={`icondm fas ${category.icon}`} />{" "}
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
