const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://martin24olsson:<password>@cluster0.xjlnu6l.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a MongoDB schema and model (e.g., TextFile)
const textFileSchema = new mongoose.Schema({
  content: String
});

const TextFile = mongoose.model('TextFile', textFileSchema);

// Middleware for parsing JSON
app.use(bodyParser.json());

// API endpoint to save text
app.post('/api/saveText', async (req, res) => {
  const { content } = req.body;

  try {
    // Save text to MongoDB
    const textFile = new TextFile({ content });
    await textFile.save();
    res.status(201).json({ message: 'Text saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API endpoint to retrieve text
app.get('/api/getText', async (req, res) => {
  try {
    // Retrieve text from MongoDB
    const textFiles = await TextFile.find();
    res.json(textFiles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
