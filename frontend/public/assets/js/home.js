let currentPosition = 0;

function updateSlider() {
  console.log('Slider updated');
}

document.querySelectorAll('.category-tabs .tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.category-tabs .tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    const category = tab.getAttribute('data-category');
    document.querySelectorAll('.product-list').forEach((list) => {
      if (list.classList.contains(category)) {
        list.classList.add('active');
      } else {
        list.classList.remove('active');
      }
    });
    currentPosition = 0;
    updateSlider();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const productsPerPage = 4;
  const featuredProductLists = document.querySelectorAll('.product-list.featured .product');
  const featuredPagination = document.getElementById('featured-pagination');
  const featuredSeeMoreLink = document.querySelector('.featured-products .see-more');

  function showFeaturedPage(page) {
    featuredProductLists.forEach((product, index) => {
      if (index >= (page - 1) * productsPerPage && index < page * productsPerPage) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  function setupFeaturedPagination() {
    if (!featuredPagination) return;
  
    featuredPagination.innerHTML = '';
  
    const totalPages = Math.ceil(featuredProductLists.length / productsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('page-btn');
      button.addEventListener('click', function () {
        document.querySelectorAll('#featured-pagination button').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        showFeaturedPage(i);
      });
      featuredPagination.appendChild(button);
    }
  
    if (featuredSeeMoreLink) {
      featuredPagination.appendChild(featuredSeeMoreLink);
    }
  
    if (featuredPagination.children.length > 0) {
      featuredPagination.children[0].classList.add('active');
    }
  }

  setupFeaturedPagination();
  showFeaturedPage(1);
});

document.addEventListener('DOMContentLoaded', function () {
  const productsPerPage = 4;
  const productLists = document.querySelectorAll('.product-list.all .product');
  const pagination = document.getElementById('pagination');
  const seeMoreLink = document.querySelector('.see-more');

  function showPage(page) {
    productLists.forEach((product, index) => {
      if (index >= (page - 1) * productsPerPage && index < page * productsPerPage) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }

  function setupPagination() {
    if (!pagination) return;

    pagination.innerHTML = '';

    const totalPages = Math.ceil(productLists.length / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('page-btn');
      button.addEventListener('click', function () {
        document.querySelectorAll('.pagination button').forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        showPage(i);
      });
      pagination.appendChild(button);
    }

    if (seeMoreLink) {
      pagination.appendChild(seeMoreLink);
    }

    if (pagination.children.length > 0) {
      pagination.children[0].classList.add('active');
    }
  }

  setupPagination();
  showPage(1);
});

document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');

  products.forEach(function (product) {
    const overlay = product.querySelector('.overlay');
    const iconContainer = overlay.querySelector('.icon-container');

    product.addEventListener('mouseenter', function () {
      iconContainer.setAttribute('data-aos', 'fade-down');
      AOS.refresh();
    });

    product.addEventListener('mouseleave', function () {
      iconContainer.removeAttribute('data-aos');
    });
  });

  AOS.init({
    duration: 1200,
  });
});
