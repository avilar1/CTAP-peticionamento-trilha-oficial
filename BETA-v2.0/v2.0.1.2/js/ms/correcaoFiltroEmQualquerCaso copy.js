const radios = document.querySelectorAll('[data-filtro]')
const fecha = document.querySelector('[data-close]')
let itensfx = document.querySelectorAll('[data-fx]')

// let fx = 1;
let click = true
let check = true


fecha.addEventListener('click', (evento) => {
    fechabutton()
    fecha.parentElement.parentElement.childNodes[1].checked = false;
});

radios.forEach((elemento) => {
    if (elemento.checked == true) {
        console.log(`filtro checado é ${parseInt(elemento.dataset.valor)}`)

        if (check == false) {
            elemento.checked = false
            console.log(check)
        }
    }
})

radios.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        if (elemento.checked == true) {
            console.log(`filtro checado é ${parseInt(elemento.dataset.valor)}`);

            elemento.parentElement.lastElementChild.appendChild(fecha)
            fecha.style.display = ""
            click = true
        }
    })
})


function fechabutton() {

    click = !click
    check = !check
    click ? (fecha.style.display = "") : fecha.style.display = "none"
}





if (localStorage.getItem('fxLocal') == null) {
    localStorage.setItem('fxLocal', '1');
}

itensfx.forEach(element => {

    if (element.dataset.fx == localStorage.getItem('fxLocal')) {
        element.setAttribute("checked", "");
        element.parentElement.lastElementChild.appendChild(fecha);
        fecha.style.display = ""
    }else {
        element.removeAttribute("checked");
    }
    element.addEventListener('click', (ev) => {

        localStorage.setItem('fxLocal', element.dataset.fx);
        fx = element.dataset.fx;
    })
})

