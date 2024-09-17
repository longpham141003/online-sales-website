import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [parentCategories, setParentCategories] = useState([]);
  const [childCategories, setChildCategories] = useState({});
  const [grandchildCategories, setGrandchildCategories] = useState({});
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [user, setUser] = useState(null);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const parentResponse = await axios.get("http://localhost:3000/api/parent-categories");
        setParentCategories(parentResponse.data);

        const childResponse = await axios.get("http://localhost:3000/api/child-categories");
        const childCategoriesByParent = {};
        childResponse.data.forEach(child => {
          if (!childCategoriesByParent[child.parent_id]) {
            childCategoriesByParent[child.parent_id] = [];
          }
          childCategoriesByParent[child.parent_id].push(child);
        });
        setChildCategories(childCategoriesByParent);

        const grandchildResponse = await axios.get("http://localhost:3000/api/grandchild-categories");
        const grandchildCategoriesByChild = {};
        grandchildResponse.data.forEach(grandchild => {
          if (!grandchildCategoriesByChild[grandchild.parent_id]) {
            grandchildCategoriesByChild[grandchild.parent_id] = [];
          }
          grandchildCategoriesByChild[grandchild.parent_id].push(grandchild);
        });
        setGrandchildCategories(grandchildCategoriesByChild);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();

    const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));
    if (loggedInUser) {
      setUser(loggedInUser);
    }

    const handleUserLoggedIn = (event) => {
      setUser(event.detail);
      localStorage.setItem('userInfo', JSON.stringify(event.detail)); // Save to localStorage
    };

    window.addEventListener('userLoggedIn', handleUserLoggedIn);

    return () => {
      window.removeEventListener('userLoggedIn', handleUserLoggedIn);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setDropdownVisible(index);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const handleUserMouseEnter = () => {
    setUserDropdownVisible(true);
  };

  const handleUserMouseLeave = () => {
    setUserDropdownVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <>
      <div className="header">
        <div className="account-options">
          <span>USD</span>
          <span>English</span>
          <span>
            <i className="fas fa-user" /> My Account
          </span>
          <span>
            <i className="fas fa-heart" /> Wishlist
          </span>
          <span>
            <i className="fas fa-shopping-cart" /> My Cart
          </span>
          <span>
            <i className="fas fa-check" /> Checkout
          </span>
          <span
            onMouseEnter={handleUserMouseEnter}
            onMouseLeave={handleUserMouseLeave}
            style={{ position: "relative" }}
          >
            {user ? (
              <>
                <span>Xin chào, {user.username}</span>
                {userDropdownVisible && (
                  <div className="user-dropdown">
                    <Link to="/profile">Thông tin tài khoản</Link>
                    <Link to="/login" onClick={handleLogout}>Đăng xuất</Link>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login"><i className="fas fa-lock" /> Login</Link>
            )}
          </span>
        </div>
        <div className="logo-search">
          <div className="logo">
            <img src="assets/images/logo.png" alt="Flipmart Logo" />
          </div>
          <div className="search-bar">
            <select className="categories">
              {parentCategories.map(parentCategory => (
                <option key={parentCategory._id} value={parentCategory._id}>
                  {parentCategory.name}
                </option>
              ))}
            </select>
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="cart">
            <div className="cart-icon">
              <i className="fas fa-shopping-cart" />
            </div>
            <div className="cart-info">
              <span>CART - $600.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        {parentCategories.map((parentCategory, index) => (
          <div
            key={parentCategory._id}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={`category/${parentCategory._id}`}>
              {parentCategory.name}
            </a>
          </div>
        ))}
        <a style={{ color: "#ffff00" }} className="offer" href="#">
          Xem thêm
        </a>
      </div>
    </>
  );
};

export default Header;
