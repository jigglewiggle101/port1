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

  registerUser(name, email, password);
window.location.href = "/registration-success";
  
  // User registration function
function registerUser(name, email, password) {
  // Hash the password for secure storage
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Store user data in a database or local storage
  const userData = {
    name,
    email,
    hashedPassword
  };
  localStorage.setItem(`user-${email}`, JSON.stringify(userData));
}



// Ticket purchase function
function purchaseTickets(userId, eventId, quantity) {
  // Retrieve user data from storage
  const userString = localStorage.getItem(`user-${userId}`);
  const userData = JSON.parse(userString);

  // Verify user credentials
  if (!userData || !bcrypt.compareSync(password, userData.hashedPassword)) {
    return false;
  }

  // Check if user has reached the purchase limit
  const purchasedTickets = getUserPurchasedTickets(userId);
  if (purchasedTickets + quantity > 3) {
    alert('You have reached the maximum ticket purchase limit.');
    return false;
  }

  // Update user's purchased tickets
  updateUserPurchasedTickets(userId, quantity);

  // Process ticket purchase (e.g., update database, send confirmation email)
  return true;
}
  
  