const cep = document.querySelector("#cep"); // pegou o campo do HTML com o ID cep.

// criou o MMC definindo os atributos do objeto
const options = { 
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}


// adicionou uma arrow function "de escuta" que ao sair do campo remove os caracteres especiais e executa o FETCH
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");    
    search = cep.value.replace(".", "");
    console.log(search);
    
    // Aqui executa o FETCH com a URL da API disponível:
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json() // aqui converteu o JSON para OBJETO
        .then(data => {
            console.log('RESPOSTA (OBJETO):',data) // aqui exibe no console o OBJETO
            showData(data) // Aqui é chamada a função que vai percorrer os campos add os valores (linha: 11)
        })
    })
    .catch(e => { // aqui há uma tratativa de erro que vai exibir no console qual foi o erro.
        console.log("ERRO: "+e)
    })
 })


//---------------------------------------------------------------------------------

// criou uma arrow function que percorrerá os campos e adicionará os valores após obter a resposta
const showData = (result) => {
    for (const campo in result){ // for especial que percorre o array
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }
    }
}