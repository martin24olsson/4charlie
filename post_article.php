<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $content = $_POST["content"] ?? '';

    if (!empty($content)) {
        // Append the new article content to articles.txt
        file_put_contents("articles.txt", $content . PHP_EOL, FILE_APPEND);
        echo "Success"; // Send a response back to the client
    } else {
        echo "Error: Content is empty";
    }
} else {
    echo "Error: Invalid request method";
}
?>
