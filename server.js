const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
console.log("Server is starting...")
const hitdicearray = {"barbarian":12,"bard":8,"cleric":8,"druid":8,"fighter":10,"monk":8,"paladin":10,"ranger":10,"rogue":8,"sorcerer":6,"warlock":8,"wizard":6};
const racespeedarray = {"dwarf":25,"elf":30,"human":30};
const racetraits = {"dwarf":"Traits :\ndarkvision\ndwarven resilience\ndwarven combat training\nstonecunning\ndwarven toughness\n","elf":"Traits :\ndarkvision\nkeen senses\nfey ancestry\ntrance\n","human":"Traits : none\n"};
const classabilities = {"wizard":"Abilities:\nSpellcasting\nCantrips\nSpellbook\nPreparing and Casting spells\nSpellcasting ability\nRitual Casting\nSpellcasting focus\nLearning Spells\nArcane Recovery\n","rogue":"Abilities:\nSneak Attack\nThieves' Cant\nCunning Action\n","fighter":"Abilities:\nFighting Style\nSecond Wind\n","paladin":"Abilities:\nDivine Sense\nLay on Hands\n"}
const itemproficiency = {"barbarian":"light armor\nmedium armor\nshields\nsimple weapons\nmartial weapons\n","fighter":"all armor\nshields\nsimple weapons\nmartial weapons\n","paladin":"all armor\nshields\nsimple weapons\nmartial weapons","rogue":"light armor\nsimple weapons\nhand crossbows\nlongswords\nrapiers\nshortswords\n","wizard":"daggers\ndarts\nslings\nquarterstaffs\nlight crossbows\n"};

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
  res.send('Form submitted successfully!');
});

function storeFormData(data) {
  console.log('Adding more info to the JSON file to be transmitted');
  // Convert data to JSON string
  var jsondata = JSON.stringify(data);
  jsondata=JSON.parse(jsondata);
  const directory = path.join(__dirname, 'FormData');
  //console.log(jsondata);
  jsondata2 = AddInfoToJson(jsondata);
  //console.log(jsondata2);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  // Generate a unique filename (e.g., based on timestamp)
  const timestamp = Date.now();
  const filename = path.join(directory, `form_data_${timestamp}.json`);

  // Write JSON data to file
  fs.writeFile(filename, JSON.stringify(jsondata2,null,4), (err) => {
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
  jsondata['profbonus'] = Math.floor(jsondata['level']/4)+2
  jsondata['strmod'] = Math.floor((jsondata['strength']-10)/2);
  jsondata['dexmod'] = Math.floor((jsondata['dexterity']-10)/2);
  jsondata['conmod'] = Math.floor((jsondata['constitution']-10)/2);
  jsondata['intmod'] = Math.floor((jsondata['intelligence']-10)/2);
  jsondata['wismod'] = Math.floor((jsondata['wisdom']-10)/2);
  jsondata['chamod'] = Math.floor((jsondata['charisma']-10)/2);
  jsondata['hitdice'] = hitdicearray[jsondata['class']];
  jsondata['hp'] = jsondata['hitdice'] + jsondata['conmod'];
  jsondata['ac'] = 10 + jsondata['dexmod'];
  jsondata['initiative'] = jsondata['dexmod'];
  jsondata['speed'] = racespeedarray[jsondata['race']];
  var traits = racetraits[jsondata['race']];
  var abilities = classabilities[jsondata['class']];
  jsondata['traitsabilities'] = traits + abilities;
  jsondata['itemproficiencies'] = itemproficiency[jsondata['class']];
  console.log(jsondata);
  return jsondata;
}

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});