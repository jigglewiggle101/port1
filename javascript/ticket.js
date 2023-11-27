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
      inputField.value = value;
    });
  });
  
  