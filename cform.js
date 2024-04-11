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
            if (selectedClass === 'fighter' && (checkbox.id === 'acrobatics' || checkbox.id === 'animalhandling' || checkbox.id === 'athletics' || checkbox.id === 'history' || checkbox.id === 'insight' || checkbox.id === 'intimidation'  || checkbox.id === 'perception'  || checkbox.id === 'survival')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 2 Skills of your choice";
                max_proficiency_checked = 2;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'wizard' && (checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'performance' || checkbox.id === 'persuasion' || checkbox.id === 'perception' || checkbox.id === 'stealth'  || checkbox.id === 'acrobatics'  || checkbox.id === 'sleightofhand')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 3 Skills of your choice";
                max_proficiency_checked = 3;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'paladin' && (checkbox.id === 'athletics' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'medicine' || checkbox.id === 'persuasion' || checkbox.id === 'religion')) {
                document.getElementById("SkillProf").innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 2 Skills of your choice";
                max_proficiency_checked = 2;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            }
            else if (selectedClass === 'rogue' && (checkbox.id === 'acrobatics' || checkbox.id === 'athletics' || checkbox.id === 'deception' || checkbox.id === 'insight' || checkbox.id === 'intimidation' || checkbox.id === 'investigation' || checkbox.id === 'perception' || checkbox.id === 'performance' || checkbox.id === 'persuasion')) {
                document.getElementById('SkillProf').innerHTML = "Skill proficiency : Check all skills you have proficiency with ! 4 Skills of your choice";
                max_proficiency_checked = 4;
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
            } else {
                checkbox.style.display = 'none'; // Hide the checkbox
                checkbox.checked=false;
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
            checkbox.checked=false;
            if (selectedbg === 'acolyte' && (checkbox.id === 'insight' || checkbox.id === 'religion')) {
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Religion";
            }else if(selectedbg ==='charlatan' && (checkbox.id === 'deception' || checkbox.id === 'sleightofhand')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Sleight of hand";
            }else if(selectedbg ==='criminal' && (checkbox.id === 'deception' || checkbox.id === 'stealth')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Deception, Stealth";
            }else if(selectedbg ==='entertainer' && (checkbox.id === 'acrobatics' || checkbox.id === 'performance')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Acrobatics, Performance";
            }else if(selectedbg ==='folkhero' && (checkbox.id === 'animalhandling' || checkbox.id === 'survival')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Animal Handling, Survival";
            }else if(selectedbg ==='guildartisan' && (checkbox.id === 'insight' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Insight, Persuasion";
            }else if(selectedbg ==='hermit' && (checkbox.id === 'medicine' || checkbox.id === 'religion')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Medicine, Religion";
            }else if(selectedbg ==='noble' && (checkbox.id === 'history' || checkbox.id === 'persuasion')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : History, Persuasion";
            }else if(selectedbg ==='outlander' && (checkbox.id === 'athletics' || checkbox.id === 'survival')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Survival";
            }else if(selectedbg ==='sage' && (checkbox.id === 'arcana' || checkbox.id === 'history')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Arcana, History";
            }else if(selectedbg==='soldier' && (checkbox.id === 'athletics' || checkbox.id === 'intimidation')){
                checkbox.style.display = 'block'; // Show the checkbox
                document.querySelector('label[for="' + checkbox.id + '"]').style.display = 'block';
                document.getElementById("GivenSkillProfByBg").innerHTML= "Skill proficiency given by your background : Athletics, Intimidation";
            }else if(selectedbg==='urchin' && (checkbox.id === 'sleightofhand' || checkbox.id === 'stealth')){
                checkbox.style.display = 'block'; // Show the checkbox
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
