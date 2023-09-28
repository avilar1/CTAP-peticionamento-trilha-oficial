<<<<<<< HEAD

const corpo = document.querySelectorAll('[data-linha]');

correcaoDasTags(corpo.length);


function correcaoDasTags(end) {

    console.log(end)
  //   const e = pop.detalhes;
  // window.e = e;
    let rowDesk = document.querySelectorAll('[data-desk="row"]');
    let ahonePOP = document.querySelectorAll('[data-acc="ahone"]');
    let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]');
    let aconePOP = document.querySelectorAll('[data-acc="acone"]');
    let asit = document.querySelectorAll('[data-acc="asit"]');
  
    for (let i = 0; i < end; i++) {
  
      rowDesk[i].id = "cardbody-desk" + i;
  
      ahonePOP[i].id = 'flush-heading' + i;
      abuttonPOP[i].dataset.bsTarget = '#flush-collapse' + i;
      abuttonPOP[i].setAttribute("aria-controls", 'flush-collapse' + i);
      abuttonPOP[i].dataset.id = i;
      abuttonPOP[i].dataset.qualacc = i;
      abuttonPOP[i].id = 'accordionbutton' + i;
      aconePOP[i].id = 'flush-collapse' + i;
      aconePOP[i].setAttribute("aria-labelledby", 'flush-heading' + i);
      aconePOP[i].ariaLabelledby = 'flush-heading' + i;
      asit[i].id = i;
      asit[i].dataset.qualacc = i;
    }
  
=======

const corpo = document.querySelectorAll('[data-linha]');

correcaoDasTags(corpo.length);


function correcaoDasTags(end) {

    console.log(end)
  //   const e = pop.detalhes;
  // window.e = e;
    let rowDesk = document.querySelectorAll('[data-desk="row"]');
    let ahonePOP = document.querySelectorAll('[data-acc="ahone"]');
    let abuttonPOP = document.querySelectorAll('[data-acc="abutton"]');
    let aconePOP = document.querySelectorAll('[data-acc="acone"]');
    let asit = document.querySelectorAll('[data-acc="asit"]');
  
    for (let i = 0; i < end; i++) {
  
      rowDesk[i].id = "cardbody-desk" + i;
  
      ahonePOP[i].id = 'flush-heading' + i;
      abuttonPOP[i].dataset.bsTarget = '#flush-collapse' + i;
      abuttonPOP[i].setAttribute("aria-controls", 'flush-collapse' + i);
      abuttonPOP[i].dataset.id = i;
      abuttonPOP[i].dataset.qualacc = i;
      abuttonPOP[i].id = 'accordionbutton' + i;
      aconePOP[i].id = 'flush-collapse' + i;
      aconePOP[i].setAttribute("aria-labelledby", 'flush-heading' + i);
      aconePOP[i].ariaLabelledby = 'flush-heading' + i;
      asit[i].id = i;
      asit[i].dataset.qualacc = i;
    }
  
>>>>>>> a4706e7be1a68f165e5662dcc0a52265a3f98cdd
  }