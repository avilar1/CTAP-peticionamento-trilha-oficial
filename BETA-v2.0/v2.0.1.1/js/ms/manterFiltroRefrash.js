<<<<<<< HEAD
let itens = document.querySelectorAll('[data-fx]')
const close = document.querySelector('[data-close]')

// let fx = 1;


if (localStorage.getItem('fxLocal') == null) {
    localStorage.setItem('fxLocal', '1');
}

itens.forEach(element => {

    if (element.dataset.fx == localStorage.getItem('fxLocal')) {
        element.setAttribute("checked", "");
        element.parentElement.lastElementChild.appendChild(close);
        close.style.display = ""
    }else {
        element.removeAttribute("checked");
    }
    element.addEventListener('click', (ev) => {

        localStorage.setItem('fxLocal', element.dataset.fx);
        fx = element.dataset.fx;
    })
})


=======
let itens = document.querySelectorAll('[data-fx]')
const close = document.querySelector('[data-close]')

// let fx = 1;


if (localStorage.getItem('fxLocal') == null) {
    localStorage.setItem('fxLocal', '1');
}

itens.forEach(element => {

    if (element.dataset.fx == localStorage.getItem('fxLocal')) {
        element.setAttribute("checked", "");
        element.parentElement.lastElementChild.appendChild(close);
        close.style.display = ""
    }else {
        element.removeAttribute("checked");
    }
    element.addEventListener('click', (ev) => {

        localStorage.setItem('fxLocal', element.dataset.fx);
        fx = element.dataset.fx;
    })
})


>>>>>>> a4706e7be1a68f165e5662dcc0a52265a3f98cdd
