exports.handler = async function(event, context) {
    try {
        const { text } = JSON.parse(event.body);
        // Here, you can save the text to a database or a file, depending on your requirements.
        // For simplicity, we'll just return the saved text in the response.
        return {
            statusCode: 200,
            body: JSON.stringify({ savedText: text }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
