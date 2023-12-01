const validateName = (name) => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
};

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.com$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  const regexSpecialCharacter = /[!@#$%^&*()-_=+{};:'\",<.>/?]+/;
  const regexNumber = /[0-9]+/;

  if (password.length >= 8 && regexSpecialCharacter.test(password) && regexNumber.test(password)) {
    return true;
  } else {
    return false;
  }
};

const validateCouponCode = (couponCode) => {
  const regexCouponCode = /^[A-Z0-9]{8}$/;
  return regexCouponCode.test(couponCode);
};

const registrationForm = document.getElementById('form');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const couponCode = document.getElementById('coupon-code').value;

  if (!validateName(name)) {
    alert('Invalid name format');
    return;
  }

  if (!validateEmail(email)) {
    alert('Invalid email address');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long and with special character');
    return;
  }

  registerUser(name, email, password, couponCode);
});

function registerUser(name, email, password, couponCode) {
  // Validate name, email, and password
  if (!validateName(name)) {
    alert('Invalid name format');
    return;
  }

  if (!validateEmail(email)) {
    alert('Invalid email address');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long and with special character');
    return;
  }

  // Validate coupon code (if provided)
  if (couponCode && !validateCouponCode(couponCode)) {
    alert('Invalid coupon code');
    return;
  }

  // Upon successful registration, display a message and generate a random coupon code
  alert('Registration successful!');
  const generatedCouponCode = generateCouponCode();
  alert(`Your coupon code is: ${generatedCouponCode}`);

  // Store user information in local storage
  localStorage.setItem('user', JSON.stringify({
    name: name,
    email: email,
    password: password,
    couponCode: generatedCouponCode,
  }));

  // Redirect to ticket.html page
  window.location.href = 'ticket.html';
}

function generateCouponCode() {
  // Generate a random coupon code here
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let couponCode = '';
  for (let i = 0; i < 8; i++) {
    couponCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return couponCode;
}












 





