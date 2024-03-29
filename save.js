let savedTexts = [];

exports.handler = async function (event, context) {
    try {
        if (event.httpMethod === 'POST') {
            const { text } = JSON.parse(event.body);
            savedTexts.push(text);
            return {
                statusCode: 200,
                body: JSON.stringify({ savedText: text }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Bad Request' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
        };
    }
};
