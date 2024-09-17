import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();
export const ProductContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedChildCategory, setSelectedChildCategory] = useState(null);
  const [products, setProducts] = useState([]);

  return (
    <CategoryContext.Provider value={{ selectedChildCategory, setSelectedChildCategory }}>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </CategoryContext.Provider>
  );
};
