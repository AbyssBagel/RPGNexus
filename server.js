const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
console.log("Server is starting...")
const hitdicearray = ["barbarian"=12,"bard"=8,"cleric"=8,"druid"=8,"fighter"=10,"monk"=8,"paladin"=10,"ranger"=10,"rogue"=8,"sorcerer"=6,"warlock"=8,"wizard"=6];
const racespeedarray = ["dwarf"=25,"elf"=30,"human"=30];
const racetraits = ["dwarf"="Traits :\ndarkvision\ndwarven resilience\ndwarven combat training\nstonecunning\ndwarven toughness\n","elf"="Traits :\ndarkvision\nkeen senses\nfey ancestry\ntrance\n","human"="Traits : none\n"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files from the current directory
app.use(express.static(__dirname));
// Route for the homepage
app.get('/', (req, res) => {
  console.log("Directed to Home Page")
  res.sendFile(__dirname + '/home.html');
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
  var jsonData = JSON.stringify(data);
  const directory = path.join(__dirname, 'FormData');
  jsonData = AddInfoToJson(jsonData);
  

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


function AddInfoToJson(jsondata){
  switch(jsondata['class']){
    case "Barbarian":
      jsondata['profsaves']=['strength','constitution']
    case "Bard":
      jsondata['profsaves']=['dexterity','charisma']
    case "Cleric":
      jsondata['profsaves']=['wisdom','charisma']
    case "Druid":
      jsondata['profsaves']=['intelligence','wisdom']
    case "Fighter":
      jsondata['profsaves']=['strength','constitution']
    case "Monk":
      jsondata['profsaves']=['dexterity','wisdom']
    case "Paladin":
      jsondata['profsaves']=['wisdom','charisma']
    case "Ranger":
      jsondata['profsaves']=['dexterity','wisdom']
    case "Rogue":
      jsondata['profsaves']=['dexterity','intelligence']
    case "Sorcerer":
      jsondata['profsaves']=['constitution','charisma']
    case "Warlock":
      jsondata['profsaves']=['wisdom','charisma']
    case "Wizard":
      jsondata['profsaves']=['intelligence','wisdom']
  }
  jsonData['profbonus'] = Math.floor(jsonData['level']/4)+2
  jsonData['strmod'] = Math.floor((jsonData['strength']-10)/2);
  jsonData['dexmod'] = Math.floor((jsonData['dexterity']-10)/2);
  jsonData['conmod'] = Math.floor((jsonData['constitution']-10)/2);
  jsonData['intmod'] = Math.floor((jsonData['intelligence']-10)/2);
  jsonData['wismod'] = Math.floor((jsonData['wisdom']-10)/2);
  jsonData['chamod'] = Math.floor((jsonData['charisma']-10)/2);
  jsonData['hitdice'] = hitdicearray[jsonData['class']];
  jsonData['hp'] = jsonData['hitdice'] + jsonData['conmod'];
  jsonData['ac'] = 10 + jsonData['dexmod'];
  jsonData['initiative'] = jsonData['dexmod'];
  jsonData['speed'] = racespeedarray[jsonData['race']];

  //Rendu ici, faut concaténer les traits raciaux avec les skills de la classe
  //jsonData['skillstraits'] 




  return jsondata
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});