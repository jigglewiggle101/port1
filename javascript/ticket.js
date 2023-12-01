

// Example logic - ticket.js

// Get all quantity input fields
const quantityInputs = document.querySelectorAll('.input-field');

// Function to update total amount
function updateTotalAmount() {
  let total = 0;

  // Calculate total based on quantity and price (assuming price is fixed)
  quantityInputs.forEach(input => {
    const quantity = parseInt(input.value);
    total += quantity * 100; // Assuming each ticket costs 100 units
  });

  // Update the total amount field
  const totalAmountField = document.getElementById('total-amount');
  totalAmountField.value = total;
}

// Event listeners for increment and decrement buttons
const incButtons = document.querySelectorAll('.inc');
const decButtons = document.querySelectorAll('.dec');

incButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    quantityInputs[index].value = parseInt(quantityInputs[index].value) + 1;
    updateTotalAmount();
  });
});

decButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentValue = parseInt(quantityInputs[index].value);
    if (currentValue > 0) {
      quantityInputs[index].value = currentValue - 1;
      updateTotalAmount();
    }
  });
});

// Initialize total amount on page load
updateTotalAmount();



  