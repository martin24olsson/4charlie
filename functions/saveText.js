exports.handler = async function (event) {
    try {
        const requestBody = JSON.parse(event.body);
        const text = requestBody.text;

        // You can store the text in a database or any other persistent storage
        // For simplicity, we'll use an in-memory array as an example
        let textHistory = [];
        if (process.env.TEXT_HISTORY) {
            textHistory = JSON.parse(process.env.TEXT_HISTORY);
        }

        textHistory.push({ text });
        process.env.TEXT_HISTORY = JSON.stringify(textHistory);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    }
};
