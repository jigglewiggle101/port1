let totalPurchasedTickets = 0;

// Add event listeners to the increment and decrement buttons
document.querySelectorAll('.dec').forEach(btn => {
    btn.addEventListener('click', () => {
      const inputField = btn.closest('.box').querySelector('.input-field');
      const value = parseInt(inputField.value, 10) - 1;
      inputField.value = value < 0 ? 0 : value;
    });
  });
  
  document.querySelectorAll('.inc').forEach(btn => {
    btn.addEventListener('click', () => {
      const inputField = btn.closest('.box').querySelector('.input-field');
      const value = parseInt(inputField.value, 10) + 1;
  
      // Check if the total tickets exceed the limit
      if (totalPurchasedTickets + value > 4) {
        alert('You have reached the maximum ticket purchase limit.');
        return;
      }
  
      inputField.value = value;
      totalPurchasedTickets += value; // Update the total purchased tickets
    });
  });
  
  
  