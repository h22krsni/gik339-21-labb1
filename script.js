//Uppgift 4 - Skapa variabler

const textfields = document.getElementsByClassName('textfield');
const checkbox = document.querySelector('.checkbox');
const divruta = document.getElementById('divruta');
const TaBortKnapp = document.getElementById('TaBortKnapp');



//Uppgift 5

function handleEvent(e) {
    const inputName = e.target.name;
    console.log(e.target);

    if (inputName === 'content') {
        divruta.innerHTML = e.target.value; 
    }
}




// Uppgift 6
for (let field of textfields) {
    field.addEventListener('input', handleEvent); 
}


checkbox.addEventListener('change', function() {
    
    const colorbox = textfields[0];
    if (checkbox.checked) {
        divruta.style.backgroundColor = colorbox.value;
    } else {
        divruta.style.backgroundColor = '';
    }
});

TaBortKnapp.addEventListener('click', function() {
    divruta.remove();
    console.log('Divrutan är tom');
});