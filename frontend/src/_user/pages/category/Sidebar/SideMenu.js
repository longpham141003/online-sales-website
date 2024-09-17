import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../../../../assets/css/user/category.css'; // Import file CSS
import { CategoryContext } from '../../../contexts/CategoryContext';

const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [parentCategories, setParentCategories] = useState([]);
  const [childCategories, setChildCategories] = useState({});
  const { selectedChildCategory, setSelectedChildCategory } = useContext(CategoryContext);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    // Lấy danh mục cha
    axios.get('http://localhost:3000/api/parent-categories')
      .then(response => {
        setParentCategories(response.data);
      })
      .catch(error => {
        console.error("Có lỗi xảy ra khi lấy danh mục cha:", error);
      });
  }, []);

  const handleParentClick = (index, parentId) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
      setActiveIndex(index);
    }

    // Nếu danh mục con chưa được lấy, thực hiện lấy danh mục con
    if (!childCategories[parentId]) {
      axios.get(`http://localhost:3000/api/child-categories/by-parent/${parentId}`)
        .then(response => {
          setChildCategories(prevState => ({
            ...prevState,
            [parentId]: response.data
          }));
        })
        .catch(error => {
          console.error(`Có lỗi xảy ra khi lấy danh mục con của parentId ${parentId}:`, error);
        });
    }
  };

  const handleChildClick = (e, childId) => {
    e.stopPropagation(); // Ngăn chặn sự kiện click cha
    setSelectedChildCategory(childId);
  };

  return (
    <div className="c-categories">
      <h3>Danh Mục</h3>
      <ul className="category-list">
        {parentCategories.map((category, index) => (
          <li
            key={index}
            className={`category-item ${expanded === index ? 'active' : ''}`}
            onClick={() => handleParentClick(index, category._id)}
          >
            <span className={`category-name ${expanded === index ? 'selected' : ''}`}>{category.name}</span>{" "}
            <span className="toggle-icon">
              {expanded === index ? '-' : '+'}
            </span>
            {expanded === index && (
              <ul className="subcategory-list active">
                {childCategories[category._id] ? (
                  childCategories[category._id].map(subcategory => (
                    <li
                      key={subcategory._id}
                      onClick={(e) => handleChildClick(e, subcategory._id)}
                      className={selectedChildCategory === subcategory._id ? 'selected' : ''}
                    >
                      {subcategory.name}
                    </li>
                  ))
                ) : (
                  <li>Đang tải...</li>
                )}
              </ul>
            )}
          </li>
        ))}
        {/* Thêm các danh mục khác ở đây */}
      </ul>
    </div>
  );
};

export default SideMenu;
