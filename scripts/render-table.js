document.addEventListener('DOMContentLoaded', () => {
  renderTable();
});

function renderTable() {
  const tableBody = document.getElementById('products-table-body');
  const productTable = document.querySelector('.js-product-table-container');
  const tableTitle = document.getElementById('table-title');

  tableBody.innerHTML = '';
  
  const productsList = JSON.parse(localStorage.getItem('products')) || [];

  if (productsList.length > 0) {
    productTable.classList.remove('hidden');
    tableTitle.textContent = `registered products (${productsList.length})`;
  } else {
    productTable.classList.add('hidden');
  }

  productsList.forEach(product => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${product.code}</td>
      <td>${product.brand}</td>
      <td>${product.type}</td>
      <td>${product.category}</td>
      <td>${product.unitPrice}</td>
      <td>${product.cost}</td>
      <td>${product.note || '-'}</td>
    `;

    tableBody.appendChild(row);
  });
}