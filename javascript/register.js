registerUser(name, email, password);
alert("Registration successful!");

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


if (!validateName(name)) {
  alert("Invalid name format");
  return;
}

if (!validateEmail(email)) {
  alert("Invalid email address");
  return;
}

if (!validatePassword(password)) {
  alert("Password must be at least 8 characters long");
  return;
}
