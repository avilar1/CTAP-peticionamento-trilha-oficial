//controle de tipo: ok
//controle de tamanho: ok


let file = document.querySelector('[data-file="addfile"]');
let corpoFiles = document.querySelector('[data-file="listafile"]');
let extras = document.querySelectorAll('[data-extralinha]');

let arq = document.querySelectorAll('[data-arquivolista]'); //qualquer arquivo, obrigatório ou não
let arquivos = document.querySelectorAll('[data-file="bfile"]'); //só os obrigatórios
let arquivosExtra = document.querySelectorAll('[data-extra="extra"]'); //só os extras

let spannome = document.querySelectorAll('[data-spannome]');
let spandsize = document.querySelectorAll('[data-spandsize]');

let spannomen = document.querySelectorAll('[data-spannomen]');
let spandsizen = document.querySelectorAll('[data-spandsizen]');

let excluir = document.querySelectorAll('[data-file="closeB"]')

const filesExtras = [];
const filesObrigatorios = [];

const mmapDeFilesExtras = new Map();

arquivos.forEach(arquiv => {
  filesObrigatorios.push('');
});



let control = 0;

function addLinha() {


  file.addEventListener('click', () => {
    let extras = document.querySelectorAll('[data-extralinha]');



    if (extras.length > 0) {
      console.log("como já existe, foi feito apenas uma cópia")
      control++;

      let novo = extras[extras.length - 1].cloneNode(true);


      novo.style.display = "";
      novo.dataset.extralinha = "0" + control;
      novo.dataset.control = control;
      corpoFiles.appendChild(novo);



      novo.childNodes[1].childNodes[3].childNodes[1].textContent = 'Nenhum arquivo selecionado'
      novo.childNodes[1].childNodes[3].childNodes[3].childNodes[1].textContent = ''
      novo.childNodes[1].childNodes[1].value = '';
      chamaGuardaNovos();

      soApareceQuandoForMaisDeDoisFacultativos();
    }

    extra();

  })
}

addLinha();
chamaGuardaNovos();

arquivos.forEach(arquiv => {
  arquiv.addEventListener('change', (e) => {
    for (let i = 0; i < arquiv.files.length; i++) {

      let name = arquiv.files.item(0).name;
      let size = arquiv.files.item(0).size;
      let type = arquiv.files.item(0).type;
      if (type !== "application/pdf") {
        alert("O arquivo " + name + " não é um PDF");
        arquiv.value = "";
        arquiv.name = "Nenhum arquivo selecionado";
        return;
      }

      if(size > 10485760 ){
        alert("O arquivo " + name + " é maior que 10MB");
        arquiv.value = "";
        arquiv.name = "Nenhum arquivo selecionado";
        return;
        }

      const qual = arquiv.dataset.qual;
      console.log(qual);
      filesObrigatorios.splice(qual - 1, 1, arquiv.files[0]);

      console.log("obrigatorio: " + name);

      spannome.forEach(span => {
        if (span.dataset.spannome === qual) {
          span.textContent = name;
        }
      });
      spandsize.forEach(span => {
        if (span.dataset.spandsize === qual) {
          //span.textContent = (size/1024).toFixed(2) + " KB" ;
          span.textContent = returnFileSize(size);
        }
      });
    }

  })
});



function chamaGuardaNovos() {
  arquivosExtra = document.querySelectorAll('[data-extra="extra"]');
  arquivosExtra.forEach(arq => {
    arq.addEventListener('change', (e) => {
      for (let i = 0; i < arq.files.length; i++) {

        let name = arq.files.item(0).name;
        let size = arq.files.item(0).size;
        let type = arq.files.item(0).type;

        if (type !== "application/pdf") {
          alert("O arquivo " + name + " não é um PDF");
          arq.value = "";
          arq.name = "Nenhum arquivo selecionado";
          return;
        }


        if(size > 10485760 ){
            alert("O arquivo " + name + " é maior que 10MB");
            arq.value = "";
            arq.name = "Nenhum arquivo selecionado";
            return;
            }


        const qualn = arq.dataset.qualn;
        console.log(qualn);
        mmapDeFilesExtras.set(qualn, arq.files[0])
        filesExtras.splice(qualn - 1, 1, arq.files[0]);
 
        /**ADICIONAR CONTROLE DE TAMANHO AQUI */
        console.log("extra: " + name);

        spannomen = document.querySelectorAll('[data-spannomen]');
        spandsizen = document.querySelectorAll('[data-spandsizen]');

        spannomen.forEach(span => {
          if (span.dataset.spannomen === qualn) {
            span.textContent = name;
          }
        });
        spandsizen.forEach(span => {
          if (span.dataset.spandsizen === qualn) {
            // span.textContent = (size / 1024).toFixed(2) + " KB";
            span.textContent = returnFileSize(size);
          }
        });
      }
    });

  });
}

function remove(el) {

  // let element = el;
  let kpai = el.dataset.control
  filesExtras.splice(kpai, 1, "")
  mmapDeFilesExtras.set(kpai, '')
  el.remove();
  control--;
  extras = document.querySelectorAll('[data-extralinha]');
  reamudar(extras);

  soApareceQuandoForMaisDeDoisFacultativos();
}

function returnFileSize(number) {
  if (number < 1024) {
    return `${number} bytes`;
  } else if (number >= 1024 && number < 1048576) {
    return `${(number / 1024).toFixed(1)} KB`;
  } else if (number >= 1048576) {
    return `${(number / 1048576).toFixed(1)} MB`;
  }
}

function reamudar(extras) {
  if (extras.length > 0) {

    let i = 0;
    extras.forEach(extra => {
      extra.childNodes[1].childNodes[3].childNodes[1].dataset.spannomen = i;
      extra.childNodes[1].childNodes[3].childNodes[3].childNodes[1].dataset.spandsizen = i;
      extra.childNodes[3].childNodes[3].dataset.qualn = i;
      extra.childNodes[3].childNodes[3].name = "arquivon" + i;
      extra.childNodes[3].childNodes[3].id = "arquivon" + i;
      extra.childNodes[3].childNodes[1].setAttribute("for", "arquivon" + i);
      i++;
    });
  }
}

function extra() {

  arquivosExtra = document.querySelectorAll('[data-extra="extra"]');
  extras = document.querySelectorAll('[data-extralinha]');
  spannome = document.querySelectorAll('[data-spannome]');
  spandsize = document.querySelectorAll('[data-spandsize]');
  reamudar(extras);
  if (control < 0) {
    control = 0;
  }
  console.log(extras[control].childNodes[1].childNodes[3].childNodes[1]);

}

function soApareceQuandoForMaisDeDoisFacultativos() {
  arq = document.querySelectorAll('[data-arquivolista]');
  extras = document.querySelectorAll('[data-extralinha]');
  excluir = document.querySelectorAll('[data-file="closeB"]')

  // if(extras.length > 2) {
  //   excluir.forEach(function(btn, i) {
  //     if(i===2 || i===3) {
  //       btn.style.display = "none";
  //     }else {

  //       btn.style.display = "";
  //     }
  //   });

  //   console.log("tem mais de um, sendo mais 1 oculto")
  // }else if(extras.length > 1){
  //     excluir.forEach(btn => {
  //       btn.style.display = "";
  //     });
  //   console.log("só tem 1 mais o oculto")

  // } else {
  //   console.log("só tem o oculto")
  // }
}
