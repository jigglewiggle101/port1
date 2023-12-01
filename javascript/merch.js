function searchMerchandise() {
  const input = document.getElementById('searchInput').value.toLowerCase(); // Retrieve user input
  const merchItems = document.querySelectorAll('.merch-item'); // Get all merchandise items

  merchItems.forEach(item => {
    const itemName = item.querySelector('p').innerText.toLowerCase(); // Get item name

    // Check if the user input matches the item name
    if (itemName.includes(input)) {
      item.style.display = 'block'; // Show the matching item
    } else {
      item.style.display = 'none'; // Hide non-matching items
    }
  });
}
