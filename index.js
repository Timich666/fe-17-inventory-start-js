const addButton = document.querySelector('.add-product');
const clearButton = document.querySelector('.clear-list');
const productsList = document.querySelector('.products-list');

addButton.addEventListener('click', () => {
  const productType = document.getElementById('type-select').value;
  const productName = document.getElementById('product-name').value;
  const productCount = document.getElementById('product-count').value;

  let isValid = true;

  if (!productType) {
    alert('Пожалуйста, выберите тип продукта.');
    isValid = false;
  }

  if (!productName) {
    alert('Пожалуйста, введите название продукта.');
    isValid = false;
  }

  if (!productCount) {
    alert('Пожалуйста, введите количество продукта.');
    isValid = false;
  }

  if (isValid) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.textContent = `${productType} - ${productName} (${productCount} шт.)`; // Исправлено

    productsList.appendChild(productItem);

    document.getElementById('type-select').selectedIndex = 0; // Используем selectedIndex
    document.getElementById('product-name').value = "";
    document.getElementById('product-count').value = "";
  }
});

clearButton.addEventListener('click', () => {
  productsList.innerHTML = '';
}); 
