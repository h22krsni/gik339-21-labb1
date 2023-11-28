// Uppgift 4-6
//variabel
const checkbox = document.getElementById("divStyle");
console.log(checkbox);

const text = document.getElementById("textfield");
console.log(text);

const tbk = document.getElementById("divruta");
console.log(tbk);

const divruta = document.getElementById("divruta");
console.log(divruta);

//funktion
function handleEvent(e){
    console.log(e.target);
    console.log(e.target.name);
    if (e.target.name ==="content"){
        createBox(e.target.value);
    }
}
function createBox(content){
    const newElement =document.createElement('div');
    newElement.classList.add('message');
    newElement.innerHTML =content;
    divruta.insertAdjacentElement('afterbegin', newElement);
}
//eventlyssnare till checkbox
checkbox.addEventListener('change',() =>{
    if (checkbox.checked ===true){
        messageBox.style.backgroundColor = textfields[0].value;
        tbk.style.backgroundColor = textfields[0].value;
    }
    else{
        messageBox.style.backgroundColor = "transparent";
    }
});
 
//eventlyssnare till textfält
testfield.forEach((field) =>field.addEventListener ('blur', handleEvent));

//eventlyssnare till knapp
tbk.addEventListener('click',() =>{
    divruta.innerHTML = "";
});