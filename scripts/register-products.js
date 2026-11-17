const form = document.getElementById('product-form');

const codeInput = document.getElementById('product-code');
const brandInput = document.getElementById('product-brand');
const typeInput = document.getElementById('product-type');
const categoryInput = document.getElementById('product-category');
const unitPriceInput = document.getElementById('product-unit-price');
const costInput = document.getElementById('product-cost');
const noteInput = document.getElementById('product-note');

const requiredInputs = [
  codeInput,
  brandInput,
  typeInput,
  categoryInput,
  unitPriceInput,
  costInput
];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let hasEmptyRequired = false;
  let firstEmptyFound = false;

  [...requiredInputs, noteInput].forEach(input => {
    input.classList.remove('valid-field', 'invalid-field');
  });

  requiredInputs.forEach((input) => {
    if (input.value.trim() === '') {
      hasEmptyRequired = true;
      
      if (!firstEmptyFound) {
        input.classList.add('invalid-field');
        firstEmptyFound = true;
      }
      
    } else {
      input.classList.add('valid-field');
    }
  });

  if (noteInput.value.trim() !== '') {
    noteInput.classList.add('valid-field');
  }

  if (hasEmptyRequired) {
    return;
  }

  const productData = {
    code: codeInput.value,
    brand: brandInput.value,
    type: typeInput.value,
    category: categoryInput.value,
    unitPrice: unitPriceInput.value,
    cost: costInput.value,
    note: noteInput.value
  };

  let productsList = JSON.parse(localStorage.getItem('products')) || [];

  productsList.push(productData);

  localStorage.setItem('products', JSON.stringify(productsList));

  alert('Produto cadastrado com sucesso!')
  form.reset();

  [...requiredInputs, noteInput].forEach(input => {
    input.classList.remove('valid-field', 'invalid-field');
  });

  window.location.reload();
});

const buttonsSection = document.querySelector('.js-buttons-section');
const confirmationContainer = document.querySelector('.js-confirmation-container');

document.querySelector('.js-clear-button')
  .addEventListener('click', () => {
    buttonsSection.classList.add('hidden');
    confirmationContainer.classList.remove('hidden');
  });

document.querySelector('.js-yes-button')
  .addEventListener('click', () => {
    localStorage.clear()
    window.location.reload();
  });

document.querySelector('.js-no-button')
  .addEventListener('click', () => {
    buttonsSection.classList.remove('hidden');
    confirmationContainer.classList.add('hidden');
  });