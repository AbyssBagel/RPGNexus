const express = require('express');
const app = express();


// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

// Route for redirection
app.get('/redirect', (req, res) => {
  res.redirect('/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile('login.html', { root: __dirname });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});