async function saveText() {
  const textInput = document.getElementById('text');
  const textValue = textInput.value;

  try {
    const response = await fetch('mongodb+srv://martin24olsson:<password>@cluster0.xjlnu6l.mongodb.net/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: textValue }),
    });

    const data = await response.json();

    // Update the saved text on the page
    document.getElementById('savedText').textContent = data.text;
  } catch (error) {
    console.error('Error:', error);
  }

  // Clear the input field
  textInput.value = '';
}
