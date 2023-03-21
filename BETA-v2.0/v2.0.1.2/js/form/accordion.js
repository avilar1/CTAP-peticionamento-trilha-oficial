//let click = false
const accordion = document.querySelector("[data-accordion]");
const checkbox = document.querySelector("[data-checkbox]");
const nomeCompletodoInteressado = document.querySelector('[data-nomedointeressado]');
const cpfdoInteressado = document.querySelector('[data-cpfdointeressado]');

accordion.disabled = true;


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