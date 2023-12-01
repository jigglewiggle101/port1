let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Handle form submission
document.addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Retrieve form data
  const name = event.target.elements.txtName.value;
  const mobile = event.target.elements.txtMobile.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  // Retrieve existing user list from local storage
  const list = JSON.parse(localStorage.getItem("list")) || [];

  // Create a new user object
  const newUser = new User(name, mobile, email, message);

  // Add the new user to the list
  list.push(newUser);

  // Update local storage with the updated list
  localStorage.setItem("list", JSON.stringify(list));

  // Clear the form
  event.target.reset();

  // Refresh the user table
  refreshTable();
});

// User object constructor
function User(name, mobile, email, message) {
  this.id = Date.now();
  this.name = name;
  this.mobile = mobile;
  this.email = email;
  this.message = message;
}

// Refresh user table
function refreshTable() {
  const table = document.getElementById("table-body");
  const list = JSON.parse(localStorage.getItem("list")) || [];
  let userata = "";

  for (const user of list) {
    userata += `<tr><td>${user.name}</td><td>${user.mobile}</td><td>${user.email}</td><td>${user.message}</td></tr>`;
  }

  table.innerHTML = userata;
}
