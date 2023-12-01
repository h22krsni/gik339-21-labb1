// Uppgift 4-6
//variabel
const checkbox = document.getElementById("divStyle");
console.log(checkbox);

const text = document.getElementById("textfält");
console.log(text);

const button = document.getElementById("tbk");
console.log(tbk);

const div = document.getElementById("divruta");
console.log(divruta);

//funktion
function Eventhandle(e){
    console.log(e.target);
    //console.log(e.target.name);//
    if (e.target.name ==='content') {
        const textinnehåll = e.target.value;
        divruta.innerHTML = Textinnehåll
    }
}

const section = document.querySelector('.textfält');
section.addEventListener('text',Eventhandle)

//function createBox(content){
  //  const newElement =document.createElement('div');
  //  newElement.classList.add('message');
  //  newElement.innerHTML =content;
  //  divruta.insertAdjacentElement('afterbegin', newElement);
//}
//eventlyssnare till checkbox
checkbox.addEventListener('change',() =>{
    if (checkbox.checked ===true){
        messageBox.style.backgroundColor = textfält[0].value;
        tbk.style.backgroundcolor = textfält[0].value;
    }
    else{
        messageBox.style.backgroundcolor = "transparent";
    }
});
 
//eventlyssnare till textfält
testfield.forEach((field) =>field.addEventListener ('blur', handleEvent));

//eventlyssnare till knapp
tbk.addEventListener('click',() =>{
    divruta.innerHTML = "";
   
});