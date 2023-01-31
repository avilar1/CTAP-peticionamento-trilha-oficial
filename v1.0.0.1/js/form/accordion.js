//let click = false
const accordion = document.querySelector("[data-accordion]");
const corpoacc = document.getElementById("flush-collapseOne");
const checkbox = document.querySelector("[data-accordion]").childNodes[1].childNodes[1];
const div = document.querySelector("[data-accordion]").childNodes[1]
// const checkbox = document.querySelector("#check-terceiros")

const nomeCompletodoInteressado = document.querySelector('.accordion-body').childNodes[1].childNodes[3]
// const nomeCompletodoInteressado = document.querySelector('#nomeCompletoInteressado')

const cpfdoInteressado = document.querySelector('.accordion-body').childNodes[3].childNodes[3]
// const cpfdoInteressado = document.querySelector('#cpfInteressado')

accordion.disabled = true;

// nomeCompletoInteressado.required = false;
// cpfInteressado.required = false;




checkbox.addEventListener('change', function() {
  if (this.checked) {
    accordion.disabled = false;
    
    nomeCompletodoInteressado.required = true;
    cpfdoInteressado.required = true;
    
  } else {
    accordion.disabled = true;
    nomeCompletodoInteressado.required = false;
    cpfdoInteressado.required = false;
  }
})




// accordion.addEventListener('click', (e) => {
//     checkbutton() 

// })

// function checkbutton() {

//       click = !click
//       click?(checkbox.checked = click):checkbox.checked = click
//       console.log(click)
//   }