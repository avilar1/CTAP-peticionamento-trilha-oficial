let itens = document.querySelectorAll('[data-fx]')


// let fx = 1;


if (localStorage.getItem('fxLocal') == null) {
    localStorage.setItem('fxLocal', '1');
}

itens.forEach(element => {

    if (element.dataset.fx == localStorage.getItem('fxLocal')) {
        element.cheked = true;
    }
    element.addEventListener('click', (ev) => {

        localStorage.setItem('fxLocal', element.dataset.fx);
        fx = element.dataset.fx;
    })
})


