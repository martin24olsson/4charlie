function saveText() {
  var text = document.getElementById('textInput').value;

  // Make a POST request to save text on the server
  fetch('/api/saveText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: text })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  // Clear the text input
  document.getElementById('textInput').value = '';
  
  // Refresh the saved texts
  loadSavedTexts();
}

function loadSavedTexts() {
  // Make a GET request to retrieve all saved texts from the server
  fetch('/api/getText')
  .then(response => response.json())
  .then(data => {
    var savedTextsList = document.getElementById('savedTexts');
    savedTextsList.innerHTML = ''; // Clear previous entries

    // Display each saved text
    data.forEach(text => {
      var listItem = document.createElement('li');
      listItem.textContent = text.content;
      savedTextsList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error:', error));
}

// Load saved texts on page load
window.onload = function() {
  loadSavedTexts();
};
