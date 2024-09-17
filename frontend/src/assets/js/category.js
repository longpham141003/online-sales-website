export const handleMinChange = (e, maxPrice, setMinPrice) => {
  const value = Math.min(Number(e.target.value), maxPrice - 1);
  setMinPrice(value);
};

export const handleMaxChange = (e, minPrice, setMaxPrice) => {
  const value = Math.max(Number(e.target.value), minPrice + 1);
  setMaxPrice(value);
};
