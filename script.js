//Uppgift 4 - Skapa variabler

const textfields = document.getElementsByClassName('textfield');
const checkbox = document.querySelector('.checkbox');
const divruta = document.getElementById('divruta');
const TaBortKnapp = document.getElementById('TaBortKnapp');



//Uppgift 5 - Skapa en fördefinierad funktion
// Fördefinierad funktion som eventlyssnare för textfälten
function handleEvent(e) {
    // Lagrar name-attributet i en variabel
    const inputName = e.target.name;
    console.log(e.target);

    if (inputName === 'content') {
        divruta.innerHTML = e.target.value; // Använder innerHTML för att uppdatera 'output'
    }
}


// Uppgift 6 - Koppla eventlyssnare
// Koppla eventlyssnare till varje textfält för 'input' eventet
for (let field of textfields) {
    field.addEventListener('input', handleEvent); 
}

// Uppdatera bakgrundsfärgen när kryssrutan ändras
checkbox.addEventListener('change', function() {
    // Hämta färginputfältet från samlingen textfields
    const colorbox = textfields[0];
    if (checkbox.checked) {
        divruta.style.backgroundColor = colorbox.value;
    } else {
        divruta.style.backgroundColor = ''; // Återställ bakgrundsfärgen om avmarkerad
    }
});

TaBortKnapp.addEventListener('click', function() {
    divruta.remove();
    console.log('Divrutan är tom');
});