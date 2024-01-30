const { MongoClient } = require('mongodb');

exports.handler = async function (event) {
    try {
        const requestBody = JSON.parse(event.body);
        const text = requestBody.text;

        const uri = "mongodb+srv://martin24olsson:<password>@cluster0.xjlnu6l.mongodb.net/"; // Replace with your MongoDB connection string
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const database = client.db("cluster"); // Replace with your database name
        const collection = database.collection("texts"); // Replace with your collection name

        await collection.insertOne({ text });

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, error: error.message }),
        };
    } finally {
        await client.close();
    }
};
