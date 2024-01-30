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
}

// Load saved text from the server on page load
window.onload = function() {
  // Make a GET request to retrieve text from the server
  fetch('/api/getText')
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      var savedText = data[0].content;
      document.getElementById('displayArea').innerHTML = "<h2>Saved Text:</h2>" + savedText;
    }
  })
  .catch(error => console.error('Error:', error));
}
