// Function to fill PDF 
var pdfBuffer;
function fillPdf() {
  // Fill the PDF document with data
  try {
    getData();
  } catch (e) {
    console.error('Error:', e);
  }
}

function fillPdf2(data){
  var fields = {};
  var field_names = list_fields(pdfBuffer);
  var def1 = '';
  var def2 = 'Off';
  var field_values = [
    [data.chamod], 
    [data.proficiencies.includes('acrobatics') ? data.dexmod + data.profbonus : data.dexmod], 
    [data.proficiencies.includes('arcane') ? data.intmod + data.profbonus : data.intmod],
    [data.proficiencies.includes('athletics') ? data.strmod + data.profbonus : data.strmod], 
    [data.proficiencies.includes('stealth') ? data.dexmod + data.profbonus : data.dexmod], 
    [data.proficiencies.includes('animalhandling') ? data.wismod + data.profbonus : data.wismod], 
    [data.proficiencies.includes('sleightofhand') ? data.dexmod + data.profbonus : data.dexmod], 
    [data.proficiencies.includes('history') ? data.intmod + data.profbonus : data.intmod], 
    [data.proficiencies.includes('insight') ? data.wismod + data.profbonus : data.wismod], 
    [data.proficiencies.includes('investigation') ? data.intmod + data.profbonus : data.intmod], 
    [data.proficiencies.includes('medecine') ? data.wismod + data.profbonus : data.wismod], 
    [data.proficiencies.includes('nature') ? data.intmod + data.profbonus : data.intmod], 
    [data.proficiencies.includes('perception') ? data.wismod + data.profbonus : data.wismod], 
    [data.proficiencies.includes('performance') ? data.chamod + data.profbonus : data.chamod], 
    [data.proficiencies.includes('survival') ? data.wismod + data.profbonus : data.wismod], 
    [data.proficiencies.includes('deception') ? data.chamod + data.profbonus : data.chamod], 
    [data.proficiencies.includes('intimidation') ? data.chamod + data.profbonus : data.chamod] ,
    [data.proficiencies.includes('persuasion') ? data.chamod + data.profbonus : data.chamod] ,
    [data.proficiencies.includes('religion') ? data.intmod + data.profbonus : data.intmod] ,
    [data.wismod] ,
    [data.intmod] ,
    [data.conmod] ,
    [data.dexmod] ,
    [data.strmod] ,
    [def1] ,
    [data.profbonus] ,
    [data.profsaves.includes('strength') ? data.strmod + data.profbonus : data.strmod] ,
    [data.profsaves.includes('dexterity') ? data.dexmod + data.profbonus : data.dexmod] ,
    [data.profsaves.includes('constitution') ? data.conmod + data.profbonus : data.conmod] , 
    [data.profsaves.includes('intelligence') ? data.intmod + data.profbonus : data.intmod] ,
    [data.profsaves.includes('wisdom') ? data.wismod + data.profbonus : data.wismod] ,
    [data.profsaves.includes('charisma') ? data.chamod + data.profbonus : data.chamod] ,
    [data.ac] ,
    [data.dexmod] ,
    [data.speed],
    [data.hp] ,
    [data.hp] ,
    ['0'] ,
    [data.charactername] ,
    [data.class] ,
    [data.background] ,
    [data.playername] ,
    [data.alignment] ,
    [data.race] ,
    ['0'] ,
    [data.strength] ,
    [data.dexterity] ,
    [data.constitution] ,
    [data.intelligence] ,
    [data.wisdom] ,
    [data.charisma] ,
    [data.trait], 
    [data.ideal] ,
    [data.bond] ,
    [data.flaw] ,
    [data.level + 'd' + data.hitdice] ,
    [data.level + 'd' + data.hitdice] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [data.traitsabilities] , 
    [data.wisdom] ,
    [data.profsaves.includes('strength') ? 'On' : 'Off'] ,
    [data.profsaves.includes('dexterity') ? 'On' : 'Off'] ,
    [data.profsaves.includes('constitution') ? 'On' : 'Off'] ,
    [data.profsaves.includes('intelligence') ? 'On' : 'Off'] ,
    [data.profsaves.includes('wisdom') ? 'On' : 'Off'] ,
    [data.profsaves.includes('charisma') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('acrobatics') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('arcane') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('athletics') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('stealth') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('animalhandling') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('sleightofhand') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('history') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('intimidation') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('insight') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('investigation') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('medecine') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('nature') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('perception') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('persuasion') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('religion') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('performance') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('survival') ? 'On' : 'Off'] ,
    [data.proficiencies.includes('deception') ? 'On' : 'Off'] ,
    ['0'] ,
    ['0'] ,
    ['0'],
    ['0'] ,
    ['0'] ,
    [data.equipment] ,
    [data.languages + '\n' + data.itemproficiencies] ,  
    [data.charactername] ,
    [data.age] ,
    [data.height] ,
    [data.weight] ,
    [data.eyes] ,
    [data.skin] ,
    [data.hair] ,
    [data.appearance] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    ['0'] ,
    [def2],
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1],
    [def2] ,
    [def1] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2],
    [def2] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1],
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1],
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1], 
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def1], 
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def1] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2] ,
    [def1] ,
    [def2],
    [def1] ,
    ];

  for (var i = 0; i < field_names.length; i++) {
    fields[field_names[i]] = field_values[i];
  }
  console.log("Voici les fields");
  console.log(fields);
  console.log(field_values);


try {
  filledPdfBuffer = pdfform(minipdf).transform(pdfBuffer, fields);
} catch (e) {
  console.error('Error:', e);
}

// Download the filled PDF document
var blob = new Blob([filledPdfBuffer], { type: 'application/pdf' });
var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'Filled_PDF_Document.pdf';
link.click();
}

function list_fields(buf) {
  var field_names = [];
  try {
    var field_specs = pdfform().list_fields(buf);

    for (var field_key in field_specs) {
      field_names.push(field_key);
    }
    console.log('Fields:', field_names);
    return field_names;
  } catch (e) {
    on_error(e);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var url = './FeuillePersoDD5.pdf';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function() {
    if (this.status == 200) {
      pdfBuffer = this.response;
    } else {
      on_error('failed to load URL (code: ' + this.status + ')');
    }
  };
  xhr.send();

});

// Fetch the JSON file
async function getData(){
await fetch('FormData/form_data_1712873033426.json')
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse JSON
    return response.json();
  })
  .then(data => {
    console.log("JSON sucessfully retrieved");
    console.log(data);
    fillPdf2(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


document.getElementById('fillPdfButton').addEventListener('click', fillPdf);
