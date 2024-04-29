const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001; // You can use any port you prefer
const API_KEY = ''; // Replace 'YOUR_API_KEY' with your actual Dog API key

app.use(express.json());

app.get('/api/dogs', async (req, res) => {
    try {
        const { breed } = req.query;
        const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching dog info:', error);
        res.status(500).json({ error: 'Error fetching dog information' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
