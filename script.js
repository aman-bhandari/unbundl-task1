// script.js
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPrice = document.getElementById('total');
let selectedChocolates = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      selectedChocolates.push(checkbox.value);
    } else {
      const index = selectedChocolates.indexOf(checkbox.value);
      if (index > -1) {
        selectedChocolates.splice(index, 1);
      }
    }

    if (selectedChocolates.length > 8) {
      checkbox.checked = false;
      alert('You can select up to 8 chocolates.');
    } else {
      const total = selectedChocolates.length * 2.0;
      totalPrice.textContent = `$${total.toFixed(2)}`;
    }
  });
});

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', () => {
  alert('Order placed successfully!');
});
