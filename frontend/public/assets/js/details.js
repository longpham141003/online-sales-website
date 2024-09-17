function increaseQuantity() {
  let quantityInput = document.getElementById('quantity-input');
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}
function decreaseQuantity() {
  let quantityInput = document.getElementById('quantity-input');
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}
function openTab(evt, tabName) {
  var i, tabcontent, tabitems;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tabitems = document.getElementsByClassName("tab-item");
  for (i = 0; i < tabitems.length; i++) {
    tabitems[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}