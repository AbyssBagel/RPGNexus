// Get the parent container
var checkboxContainer = document.getElementById('checkbox-proficiencies');

// Loop through each child element (checkbox and label) and hide them
checkboxContainer.childNodes.forEach(function(child) {
    if (child.tagName === 'INPUT' || child.tagName === 'LABEL') {
        child.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the class select element
    var classSelect = document.getElementById('class');
    console.log(classSelect);
    console.log(classSelect.value);
    //Add event listener on the class variable
    classSelect.addEventListener('change', function() {
        var selectedClass = this.value; // Get the selected class

        // Show or hide proficiency checkboxes
        var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');
        proficiencyCheckboxes.forEach(function(checkbox) {
            // Check if the checkbox should be hidden
            if (selectedClass === 'Fighter' && (checkbox.id === 'acrobatics' || checkbox.id === 'animal handling' || checkbox.id === 'athletics' || checkbox.id === 'history' || checkbox.id === 'insight' || checkbox.id === 'intimidation'  || checkbox.id === 'perception'  || checkbox.id === 'survival')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 2 Skills of your choice";
                max_proficiency_checked = 2;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'Wizard' && (checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'performance' || checkbox.id === 'persuasion' || checkbox.id === 'perception' || checkbox.id === 'stealth'  || checkbox.id === 'acrobatics'  || checkbox.id === 'sleight of hand')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 3 Skills of your choice";
                max_proficiency_checked = 3;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'Paladin' && (checkbox.id === 'athletics' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'medicine' || checkbox.id === 'persuasion' || checkbox.id === 'religion')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 2 Skills of your choice";
                max_proficiency_checked = 2;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'Rogue' && (checkbox.id === 'acrobatics' || checkbox.id === 'athletics' || checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'investigation' || checkbox.id === 'perception' || checkbox.id === 'performance' || checkbox.id === 'persuasion')) {
                document.getElementById('SkillProf').innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 4 Skills of your choice";
                max_proficiency_checked = 4;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            } else {
                checkbox.style.display = 'none'; // Hide the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var backgroundSelect = document.getElementById('background');

    backgroundSelect.addEventListener('change', function() {
        var selectedbg = this.value; // Get the selected background

        // Show or hide proficiency checkboxes based on selected class
        var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');
        proficiencyCheckboxes.forEach(function(checkbox) {
            // Check if the checkbox should be hidden based on selected class
            if (selectedbg === 'Acolyte' && (checkbox.id === 'insight' || checkbox.id === 'religion')) {
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Religion";
            }else if(selectedbg ==='Charlatan' && (checkbox.id === 'deception' || checkbox.id === 'sleight of hand')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Sleight of hand";
            }else if(selectedbg ==='Criminal' && (checkbox.id === 'deception' || checkbox.id === 'stealth')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Stealth";
            }else if(selectedbg ==='Entertainer' && (checkbox.id === 'acrobatics' || checkbox.id === 'performance')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Acrobatics, Performance";
            }else if(selectedbg ==='Folk Hero' && (checkbox.id === 'animal handling' || checkbox.id === 'survival')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Animal Handling, Survival";
            }else if(selectedbg ==='Guild Artisan' && (checkbox.id === 'insight' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Persuasion";
            }else if(selectedbg ==='Hermit' && (checkbox.id === 'medicine' || checkbox.id === 'religion')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Medicine, Religion";
            }else if(selectedbg ==='Noble' && (checkbox.id === 'history' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : History, Persuasion";
            }else if(selectedbg ==='Outlander' && (checkbox.id === 'athletics' || checkbox.id === 'survival')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Survival";
            }else if(selectedbg ==='Sage' && (checkbox.id === 'arcana' || checkbox.id === 'history')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Arcana, History";
            }else if(selectedbg==='Soldier' && (checkbox.id === 'athletics' || checkbox.id === 'intimidation')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Intimidation";
            }else if(selectedbg==='Urchin' && (checkbox.id === 'sleight of hand' || checkbox.id === 'stealth')){
                checkbox.style.display = 'block'; // Show the checkbox
                checkbox.checked=false;
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Sleight of hand, Stealth";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var proficiencyCheckboxes = document.querySelectorAll('#checkbox-proficiencies input[type="checkbox"]');

    proficiencyCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Count the number of checked checkboxes with the same name
            var checkedCount = document.querySelectorAll('input[name="' + this.name + '"]:checked').length;
            // If the limit is reached, cancel the check
            if (checkedCount > max_proficiency_checked) {
                this.checked = false;
            }
        });
    });
});
