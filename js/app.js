// console.log ('Estou funcionando!');

// FETCH = PESQUISE, BUSQUE, ENCONTRE.

const url = 'https://reqres.in/api/users?page=2'; // URL CORRETA
// const url = 'https://reqres.Xin/api/users?page=2'; // EXEMPLO COM ERRO NA URL PRA RODAR O CATCH

// console.log (fetch(url));

// PROMISE É UMA "PROMESSA" PENDENTE DE ATENDIMENTO DA REQUISIÇÃO
// PROMISE É É UM PROCESSAMENTO USADO PARA PROCESSAMENTO ASSÍNCRONO (RODANDO EM PARALELO COM A MINHA APLICAÇÃO)
// QUANDO A PROMISE É EFETIVADA = MÉTODO: THEN(OnFullfillment) ---> RETORNA OUTRA PROMISE PENDENTE
// QUANDO A PROMISE FALHA = METODO: THEN(onRejection) + CATCH(onRejection) ---> RETORNA OUTRA PROMISE PENDENTE

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}


fetch(url, options) // fez a promise
.then(response => { // pega a resposta da promessa e...
    console.log('RESPOSTA EM JSON:\n',response); // Resposta em formato JSON
    response.json() // Método JSON para transformar os dados para Objetos JS
    .then(dados => { // faz outra promise
        console.log('RESPOSTA CONVERTIDA PARA OBJETO:\n',dados);
        const usuarios = dados.data; // "dados" é um objeto que vai receber data (que vem lá do JSON)
        const pagina = dados.page; // outro exemplo
        console.log('RESPOSTA EM ARRAY VINDA DO OBJETO CAPTANDO O ATRIBUTO DADOS:\n',usuarios);
        console.log('RESPOSTA EM ARRAY VINDA DO OBJETO CAPTANDO O ATRIBUTO PAGE (EXEMPLO):\n',pagina);
    })
})

.catch(err => {
    console.log(err, "ERRO!")
})