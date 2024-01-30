document.addEventListener("DOMContentLoaded", function () {
    loadTextHistory();
});

function saveText() {
    const textInput = document.getElementById("text-input");
    const text = textInput.value.trim();

    if (text === "") {
        alert("Please enter some text before saving.");
        return;
    }

    // Call Netlify serverless function to save the text
    fetch("/.netlify/functions/saveText", {
        method: "POST",
        body: JSON.stringify({ text }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Text saved successfully!");
            textInput.value = "";
            loadTextHistory();
        } else {
            alert("Failed to save text. Please try again.");
        }
    })
    .catch(error => console.error("Error:", error));
}

function loadTextHistory() {
    // Call Netlify serverless function to get the text history
    fetch("/.netlify/functions/getTextHistory")
    .then(response => response.json())
    .then(data => {
        const historyList = document.getElementById("history-list");
        historyList.innerHTML = "";

        data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.text;
            historyList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error:", error));
}
