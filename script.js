// Load saved text from local storage on page load
window.onload = function() {
    var savedText = localStorage.getItem('savedText');
    if (savedText) {
        document.getElementById('displayArea').innerHTML = "<h2>Saved Text:</h2>" + savedText;
    }
};

function saveText() {
    var text = document.getElementById('textInput').value;
    var displayArea = document.getElementById('displayArea');

    // Save text to local storage
    localStorage.setItem('savedText', text);

    // Display the saved text
    displayArea.innerHTML = "<h2>Saved Text:</h2>" + text;
}
