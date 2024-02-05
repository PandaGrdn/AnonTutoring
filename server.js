const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve CSS files from the "css" directory under "public"
app.use('/css', express.static(path.join(__dirname, 'public/css')));

// Set up routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/tutors', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tutors.html'));
});

app.get('/leaderboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'leaderboard.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});