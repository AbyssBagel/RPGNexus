// Function to fill PDF 
var pdfBuffer;
function fillPdf() {
  // Fill the PDF document with data

  try {
    var fields = {};
    var field_names = list_fields(pdfBuffer);
    var def1 = '';
    var def2 = false;
    data=getData();
    var field_values = [
      [data.modcha], 
      [Acrobaties], 
      [Arcanes],
      [Athlétisme], 
      [Discrétion], 
      [Dressage], 
      [Escamotage], 
      [Histoire], 
      [Intuition], 
      [Investigation], 
      [Médecine], 
      [Nature], 
      [Perception], 
      [Représentation] 
      [Survie], 
      [Tromperie], 
      [Intimidation] ,
      [Persuasion] ,
      [Religion] ,
      [data.modwis] ,
      [data.modint] ,
      [data.modcon] ,
      [data.moddex] ,
      [data.modstr] ,
      [def2] ,
      ['+2'] ,
      [data.profsaves.includes('strenght') ? true : false] ,
      [data.profsaves.includes('dexterity') ? true : false] ,
      [data.profsaves.includes('constitution') ? true : false] , //A changer ca
      [data.profsaves.includes('intelligence') ? true : false] ,
      [data.profsaves.includes('wisdom') ? true : false] ,
      [data.profsaves.includes('charisma') ? true : false] ,
      [data.ac] ,
      [data.moddex] ,
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
      [data.strenght] ,
      [data.dexterity] ,
      [data.constitution] ,
      [data.intelligence] ,
      [data.wisdom] ,
      [data.charsima] ,
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
      [def1],
      [def1] ,
      [def1] ,
      [def1] ,
      [Capacite] ,
      [data.wisdom] ,
      [data.profsaves.includes('strenght') ? true : false] ,
      [data.profsaves.includes('dexterity') ? true : false] ,
      [data.profsaves.includes('constitution') ? true : false] ,
      [data.profsaves.includes('intelligence') ? true : false] ,
      [data.profsaves.includes('wisdom') ? true : false] ,
      [data.profsaves.includes('charisma') ? true : false] ,
      [data.proficiencies.includes('acrobatics') ? true : false] ,
      [data.proficiencies.includes('arcane') ? true : false] ,
      [data.proficiencies.includes('athletics') ? true : false] ,
      [data.proficiencies.includes('stealth') ? true : false] ,
      [data.proficiencies.includes('animalhandling') ? true : false] ,
      [data.proficiencies.includes('sleightofhand') ? true : false] ,
      [data.proficiencies.includes('history') ? true : false] ,
      [data.proficiencies.includes('intimidation') ? true : false] ,
      [data.proficiencies.includes('insight') ? true : false] ,
      [data.proficiencies.includes('investigation') ? true : false] ,
      [data.proficiencies.includes('medecine') ? true : false] ,
      [data.proficiencies.includes('nature') ? true : false] ,
      [data.proficiencies.includes('perception') ? true : false] ,
      [data.proficiencies.includes('persuasion') ? true : false] ,
      [data.proficiencies.includes('religion') ? true : false] ,
      [data.proficiencies.includes('performance') ? true : false] ,
      [data.proficiencies.includes('survival') ? true : false] ,
      [data.proficiencies.includes('deception') ? true : false] ,
      ['0'] ,
      ['0'] ,
      ['0'],
      ['0'] ,
      ['0'] ,
      [data.equipment] ,
      [data.languages] ,  
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
      [ClasseIncantation] ,
      [SortsAPreparer] ,
      [SpellSaveDC] ,
      [SpellAtkBonus] ,
      [Cantrips1] ,
      [Cantrips2] ,
      [Cantrips3] ,
      [Cantrips4] ,
      [Cantrips5] ,
      [Cantrips6] ,
      [Cantrips7] ,
      [Cantrips8] ,
      [SpellSlotLvl1] ,
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
      [SpellLvl1_1] ,
      [SpellLvl1_2] ,
      [SpellLvl1_3] ,
      [SpellLvl1_4] ,
      [SpellLvl1_5] ,
      [SpellLvl1_6] ,
      [SpellLvl1_7] ,
      [SpellLvl1_8] ,
      [SpellLvl1_9] ,
      [SpellLvl1_10] ,
      [SpellLvl1_11] ,
      [SpellLvl1_12] ,
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
      ];

    for (var i = 0; i < field_names.length; i++) {
      console.log(field_names[i]);
      //fields[field_names[i]] = field_values[i];
    }
  } catch (e) {
    console.error('Error:', e);
  }

  /*try {
    filledPdfBuffer = pdfform(minipdf).transform(pdfBuffer, fields);
  } catch (e) {
    console.error('Error:', e);
  }

  // Download the filled PDF document
  var blob = new Blob([filledPdfBuffer], { type: 'application/pdf' });
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'Filled_PDF_Document.pdf';
  link.click();*/
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
function getData(){
fetch('form_data_1712457923054.json')
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse JSON
    return response.json();
  })
  .then(data => {
    // Data is now parsed JSON object
    return data;
    // You can access the data properties here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


document.getElementById('fillPdfButton').addEventListener('click', fillPdf);
