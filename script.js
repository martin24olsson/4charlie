function saveText() {
    var text = document.getElementById('textInput').value;
    var displayArea = document.getElementById('displayArea');

    // Save text to a text file (you can use any desired method here)
    // For simplicity, we are just displaying the text in the div.
    displayArea.innerHTML = "<h2>Saved Text:</h2>" + text;
}
