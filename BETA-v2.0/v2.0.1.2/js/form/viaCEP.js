<<<<<<< HEAD
let endCep = document.querySelector('[data-end="cep"]')
let endEnd = document.querySelector('[data-end="end"]')
let endNum = document.querySelector('[data-end="num"]')
let endCop = document.querySelector('[data-end="cop"]')
let endBar = document.querySelector('[data-end="bar"]')
let endCid = document.querySelector('[data-end="cid"]')
let endUff = document.querySelector('[data-end="uff"]')



function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    endCep.value=("");
    endEnd.value=("");
    endNum.value=("");
    endCop.value=("");
    endBar.value=("");
    endCid.value=("");
    endUff.value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        endEnd.value = (conteudo.logradouro);
        endBar.value = (conteudo.bairro);
        endCid.value = (conteudo.localidade);
        endUff.value = (conteudo.uf);
        // document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {

        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');
    

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            
            endEnd.value = "...";
            endBar.value = "...";
            endCid.value = "...";
            endUff.value = "...";
            // ('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
=======
let endCep = document.querySelector('[data-end="cep"]')
let endEnd = document.querySelector('[data-end="end"]')
let endNum = document.querySelector('[data-end="num"]')
let endCop = document.querySelector('[data-end="cop"]')
let endBar = document.querySelector('[data-end="bar"]')
let endCid = document.querySelector('[data-end="cid"]')
let endUff = document.querySelector('[data-end="uff"]')



function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    endCep.value=("");
    endEnd.value=("");
    endNum.value=("");
    endCop.value=("");
    endBar.value=("");
    endCid.value=("");
    endUff.value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        endEnd.value = (conteudo.logradouro);
        endBar.value = (conteudo.bairro);
        endCid.value = (conteudo.localidade);
        endUff.value = (conteudo.uf);
        // document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {

        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');
    

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            
            endEnd.value = "...";
            endBar.value = "...";
            endCid.value = "...";
            endUff.value = "...";
            // ('ibge').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
>>>>>>> a4706e7be1a68f165e5662dcc0a52265a3f98cdd
};