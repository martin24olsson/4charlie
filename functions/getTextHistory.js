exports.handler = async function () {
    try {
        let textHistory = [];
        if (process.env.TEXT_HISTORY) {
            textHistory = JSON.parse(process.env.TEXT_HISTORY);
        }

        return {
            statusCode: 200,
            body: JSON.stringify(textHistory),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
