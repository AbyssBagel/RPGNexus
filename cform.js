// Get the parent container
var checkboxContainer = document.getElementById('checkbox-proficiencies');
var proficiencynumberforclass ={'fighter':2,'wizard':3,'paladin':2,'rogue':4};
var max_proficiency_checked=0;
// Loop through each child element (checkbox and label) and hide them
checkboxContainer.childNodes.forEach(function(child) {
    if (child.tagName === 'INPUT' || child.tagName === 'LABEL') {
        child.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the class select element
    var classSelect = document.getElementById('class');
    //Add event listener on the class variable
    classSelect.addEventListener('change', function() {
        var selectedClass = this.value; // Get the selected class
        // Show or hide proficiency checkboxes
        var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');
        proficiencyCheckboxes.forEach(function(checkbox) {
            // Check if the checkbox should be hidden
            if (selectedClass === 'fighter' && (checkbox.id === 'acrobatics' || checkbox.id === 'animalhandling' || checkbox.id === 'athletics' || checkbox.id === 'history' || checkbox.id === 'insight' || checkbox.id === 'intimidation'  || checkbox.id === 'perception'  || checkbox.id === 'survival')) {
                checkbox.style.display = 'inline-block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
            }
            else if (selectedClass === 'wizard' && (checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'performance' || checkbox.id === 'persuasion' || checkbox.id === 'perception' || checkbox.id === 'stealth'  || checkbox.id === 'acrobatics'  || checkbox.id === 'sleightofhand')) {
                checkbox.style.display = 'inline-block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
            }
            else if (selectedClass === 'paladin' && (checkbox.id === 'athletics' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'medicine' || checkbox.id === 'persuasion' || checkbox.id === 'religion')) {
                checkbox.style.display = 'inline-block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
            }
            else if (selectedClass === 'rogue' && (checkbox.id === 'acrobatics' || checkbox.id === 'athletics' || checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'investigation' || checkbox.id === 'perception' || checkbox.id === 'performance' || checkbox.id === 'persuasion')) {
                checkbox.style.display = 'inline-block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
            } else {
                checkbox.style.display = 'none'; // Hide the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'none';
            }
        });
        changenumberofproficiency();
    });
});

function changenumberofproficiency(){
    console.log(document.getElementById('class').value);
    if(document.getElementById('class').value in proficiencynumberforclass){
    max_proficiency_checked=proficiencynumberforclass[document.getElementById('class').value];
    }
    document.getElementById('SkillProf').innerHTML = "Skill proficiency : Check all skills you have proficiency with ! "+max_proficiency_checked+" Skills of your choice and 2 from your selected background";
    max_proficiency_checked+=2;
}
document.addEventListener('DOMContentLoaded', function() {
    var backgroundSelect = document.getElementById('background');

    backgroundSelect.addEventListener('change', function() {
        var selectedbg = this.value; // Get the selected background
        // Show or hide proficiency checkboxes based on selected class
        var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');
        proficiencyCheckboxes.forEach(function(checkbox) {
            //Uncheck every checkbox
            checkbox.checked=false;
            if (selectedbg === 'acolyte' && (checkbox.id === 'insight' || checkbox.id === 'religion')) {
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Religion";
            }else if(selectedbg ==='charlatan' && (checkbox.id === 'deception' || checkbox.id === 'sleightofhand')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Sleight of hand";
            }else if(selectedbg ==='criminal' && (checkbox.id === 'deception' || checkbox.id === 'stealth')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Stealth";
            }else if(selectedbg ==='entertainer' && (checkbox.id === 'acrobatics' || checkbox.id === 'performance')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Acrobatics, Performance";
            }else if(selectedbg ==='folkhero' && (checkbox.id === 'animalhandling' || checkbox.id === 'survival')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Animal Handling, Survival";
            }else if(selectedbg ==='guildartisan' && (checkbox.id === 'insight' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Persuasion";
            }else if(selectedbg ==='hermit' && (checkbox.id === 'medicine' || checkbox.id === 'religion')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Medicine, Religion";
            }else if(selectedbg ==='noble' && (checkbox.id === 'history' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : History, Persuasion";
            }else if(selectedbg ==='outlander' && (checkbox.id === 'athletics' || checkbox.id === 'survival')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Survival";
            }else if(selectedbg ==='sage' && (checkbox.id === 'arcana' || checkbox.id === 'history')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Arcana, History";
            }else if(selectedbg==='soldier' && (checkbox.id === 'athletics' || checkbox.id === 'intimidation')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Intimidation";
            }else if(selectedbg==='urchin' && (checkbox.id === 'sleightofhand' || checkbox.id === 'stealth')){
                checkbox.style.display = 'inline-block'; // Show the checkbox
                checkbox.checked=true;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'inline-block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Sleight of hand, Stealth";
            }
            changenumberofproficiency();
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');

    proficiencyCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            //Count the number of checked checkboxes
            var checkedCount = document.querySelectorAll('input[name="' + this.name + '"]:checked').length;
            //If over limit then uncheck
            if (checkedCount > max_proficiency_checked) {
                this.checked = false;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var numberInputs = document.querySelectorAll('#characteristics input[type="number"]');
    numberInputs.forEach(function(numberchanged) {
        numberchanged.addEventListener('change', function() {
            CalculatePointBasedAbilityScore();
        });
    });
});

function CalculatePointBasedAbilityScore() {
    var pointsleft=27;
    var characteristicsDiv = document.getElementById('characteristics');
    var numberInputs = characteristicsDiv.querySelectorAll('input[type="number"]');
    var numbers = Array.from(numberInputs).map(function(input) {
        return parseInt(input.value);
    });
    numbers.forEach(function(number) {
        var pointsTable = {
            8: 0,
            9: 1,
            10: 2,
            11: 3,
            12: 4,
            13: 5,
            14: 7,
            15: 9
        };
        pointsleft-=pointsTable[number];
        if(pointsleft<0){
            document.getElementById("Characstext").innerHTML = "Characteristics - Points left : " + pointsleft + " You have used more points than allowed, please correct it !";
        }else{
        console.log("Points Left:", pointsleft);
        document.getElementById("Characstext").innerHTML = "Characteristics - Points left : " + pointsleft;}
    });
}

function SendFormToServer(){
    console.log("Form submitted");
    const formData = new FormData(document.getElementById('formuser'));
    console.log(formData);
    var formDatafromuser = {};
    formData.forEach((value, key) => {
        formDatafromuser[key] = value;
    });
    console.log(formDatafromuser);
    fetch('/CharSubmit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDatafromuser)
    })
    .then(response => response.json())
    .then(data => {
        fillPdf2(data);
    });
}

//Faye Code that I need to implement

var pdfBuffer= "./FeuillePersoDD5.pdf";

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
      ['Languages:\n'+data.languages + '\n' + 'Proficiencies:\n'+data.itemproficiencies] ,  
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
      [data.chistory] ,
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
      return field_names;
    } catch (e) {
      on_error(e);
    }
  }