const { MongoClient } = require('mongodb');

exports.handler = async function () {
    try {
        const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const database = client.db("YOUR_DATABASE_NAME"); // Replace with your database name
        const collection = database.collection("texts"); // Replace with your collection name

        const textHistory = await collection.find().toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(textHistory),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    } finally {
        await client.close();
    }
};
