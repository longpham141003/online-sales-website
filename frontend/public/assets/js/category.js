const setupCategoryMenu = () => {
  document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
        const subcategoryList = this.querySelector('.subcategory-list');
        const toggleIcon = this.querySelector('.toggle-icon');
        if (subcategoryList.style.maxHeight) {
          subcategoryList.style.maxHeight = null;
          toggleIcon.textContent = '+';
        } else {
          subcategoryList.style.maxHeight = subcategoryList.scrollHeight + "px";
          toggleIcon.textContent = '-';
        }
      });
    });
  });

  const sliderMin = document.getElementById('slider-min');
  const sliderMax = document.getElementById('slider-max');
  const priceMin = document.querySelector('.price-min');
  const priceMax = document.querySelector('.price-max');

  sliderMin.addEventListener('input', function() {
    if (parseInt(sliderMin.value) > parseInt(sliderMax.value)) {
      sliderMin.value = sliderMax.value;
    }
    priceMin.textContent = `$${sliderMin.value}.00`;
  });

  sliderMax.addEventListener('input', function() {
    if (parseInt(sliderMax.value) < parseInt(sliderMin.value)) {
      sliderMax.value = sliderMin.value;
    }
    priceMax.textContent = `$${sliderMax.value}.00`;
  });
};

export default setupCategoryMenu;
