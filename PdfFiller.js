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
      [CHAmod], 
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
      [WISmod] ,
      [INTmod] ,
      [CONmod] ,
      [DEXmod] ,
      [STRmod] ,
      [def2] ,
      ['+2'] ,
      [STRsave] ,
      [DEXsave] ,
      [CONsave] ,
      [INTsave] ,
      [WISsave] ,
      [CHAsave] ,
      [CA] ,
      [DEXmod] ,
      [Vitesse],
      [MaxHP] ,
      [HPActuel] ,
      ['0'] ,
      [data.charactername] ,
      [data.Class] ,
      [data.Background] ,
      [data.playername] ,
      [data.Alignment] ,
      [data.race] ,
      [EXP] ,
      [STR] ,
      [DEX] ,
      [CON] ,
      [INT] ,
      [WIS] ,
      [CHA] ,
      [data.trait], 
      [data.ideal] ,
      [data.bond] ,
      [data.flaw] ,
      [TotalDeVie] ,
      [TotalDeVie] ,
      [def2] ,
      [def2] ,
      [def2] ,
      [Weapon1] ,
      [Weapon2] ,
      [Weapon3] ,
      [WeaponDmg1] ,
      [WeaponDmg2] ,
      [WeaponDmg3] ,
      [WeaponBonus1],
      [WeaponBonus2] ,
      [WeaponBonus3] ,
      [Incantations] ,
      [Capacite] ,
      [WIS] ,
      [STRMaitrise] ,
      [DEXMaitrise] ,
      [CONMaitrise] ,
      [INTMaitrise] ,
      [WISMaitrise] ,
      [CHAMaitrise] ,
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
      [Copper] ,
      [Silver] ,
      [Electrum],
      [Gold] ,
      [Platinum] ,
      [data.equipment] ,
      data.languages ,  //already an array in json
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
