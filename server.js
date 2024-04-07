const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
console.log("Server is starting...")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the current directory
app.use(express.static(__dirname));
// Route for the homepage
app.get('/', (req, res) => {
  console.log("Directed to Home Page")
  res.sendFile(__dirname + '/PdfFiller.html');
});

// Route for redirection
app.get('/redirect', (req, res) => {
  res.redirect('/home.html');
});

app.get('/login', (req, res) => {
  console.log("Directed to login page")
  res.sendFile('login.html', { root: __dirname });
});



app.post('/CharSubmit', (req, res) => {
  console.log("Form submitted successfully!")
  // Extract data from the form submission
  const formData = req.body;
  // Store data in a JSON file
  storeFormData(formData);
  console.log(req.body);
  res.send('Form submitted successfully!');
});

function storeFormData(data) {
  // Convert data to JSON string
  const jsonData = JSON.stringify(data);
  const directory = path.join(__dirname, 'FormData');

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  // Generate a unique filename (e.g., based on timestamp)
  const timestamp = Date.now();
  const filename = path.join(directory, `form_data_${timestamp}.json`);

  // Write JSON data to file
  fs.writeFile(filename, jsonData, (err) => {
      if (err) {
          console.error('Error writing to file:', err);
      } else {
          console.log('Form data stored successfully in:', filename);
      }
  });
}


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});