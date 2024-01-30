const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });
// Replace 'your_mongodb_connection_string' with your actual MongoDB connection string

const articleSchema = new mongoose.Schema({
    timestamp: String,
    content: String
});

const Article = mongoose.model('Article', articleSchema);

app.use(express.json());

app.post('/post-article', async (req, res) => {
    const { password, articleContent } = req.body;

    if (password === '980724') {
        const currentDate = new Date();
        const timestamp = currentDate.toLocaleString();

        const article = new Article({
            timestamp: timestamp,
            content: articleContent
        });

        try {
            await article.save();
            res.status(200).json({ message: 'Article posted successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(401).json({ message: 'Incorrect password. Please try again.' });
    }
});

app.get('/get-articles', async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
