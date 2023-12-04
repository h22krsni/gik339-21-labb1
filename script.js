// Uppgift 4-6
//variabel
const checkbox = document.getElementById("divStyle");
const inputField = document.querySelectorAll('.input-field');
const button = document.getElementsByTagName('button');
const dynamicDisplay = document.getElementById("divruta");

console.log(checkbox);
console.log(dynamicDisplay);
console.log(button);
console.log(inputField);

checkbox.addEventListener('change', function() {
    for (let inputfield of inputgroup) {
       if (inputField.name ==='color') {
        dynamicDisplay.style.background = inputfield.value;
      // messageBox.style.backgroundColor = textfield[0].value;
       //button.style.backgroundcolor = textfield[0].value;
       }
   }
}
);

/*
//funktion
function Eventhandle(e) {
    console.log(e.target);
    //console.log(e.target.name);//
    if (e.target.name ==='content') {
        const textinnehåll = e.target.value;
        divruta.innerHTML = textinnehåll;
    }
}

const section = document.querySelector('.textfield');
section.addEventListener('text',Eventhandle)

//function createBox(content){
  //  const newElement =document.createElement('div');
  //  newElement.classList.add('message');
  //  newElement.innerHTML =content;
  //  divruta.insertAdjacentElement('afterbegin', newElement);
//}
    //eventlyssnare till checkbox
checkbox.addEventListener('change', function() {
         for (let textfield of text) {
            if (textfield.name ==='color') {
             divruta.style.background = textfield.value;
           // messageBox.style.backgroundColor = textfield[0].value;
            //button.style.backgroundcolor = textfield[0].value;
            }
        }
    }
);
   // else{
      //  messageBox.style.backgroundcolor = "transparent";
    //}
//});
 
for (let textfield of text) {
    textfield.addEventListener(
        'keydown', Eventhandle
    );
}


eventlyssnare till knapp
button.addEventListener('click', () =>
    divruta.remove()); */
     

inputField.forEach((field) => field.addEventListener('blur', handleBlur));

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', handleClick);
}
const output = document.getElementById('output');
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  
}
    