// console.log ('Estou funcionando!');

// FETCH = PESQUISE, BUSQUE, ENCONTRE.

const url = 'https://reqres.in/api/users?page=1'; // URL CORRETA
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

        //EXIBIR USUÁRIOS
        for (let i = 0; i < usuarios.length; i++) {
            // console.log(usuarios[i])

            //
            let myCards = document.getElementById('myCards');
                    

            let col = document.createElement('div')
            col.setAttribute('class','col p-2');
            row.appendChild(col);

            let cardShadow = document.createElement('div')
            cardShadow.setAttribute('class','card shadow-sm');
            col.appendChild(cardShadow);
            

            let imagemUsuario = document.createElement('img');
            imagemUsuario.setAttribute('class','float-end rounded img-fluid img-thumbnail');            
            // document.getElementById('imagemUsuario').append(usuarios[i].avatar);
            let imgAtual = usuarios[i].avatar;
            imagemUsuario.setAttribute('src', imgAtual);
            imagemUsuario.setAttribute('style', 'max-width: 128px');
            cardShadow.appendChild(imagemUsuario);

            let cardBody = document.createElement('div')
            cardBody.setAttribute('class','card-body');
            cardShadow.appendChild(cardBody);

            let h3Nomesobrenome = document.createElement('h3')
            h3Nomesobrenome.setAttribute('class','user-name');
            let IdNomeSobrenome = 'h3Nomesobrenome'+[i];
            h3Nomesobrenome.setAttribute('id',IdNomeSobrenome);
            cardBody.appendChild(h3Nomesobrenome);
            document.getElementById(IdNomeSobrenome).append(`${usuarios[i].first_name} ${usuarios[i].last_name}`);

            let pDescricao = document.createElement('p')
            pDescricao.setAttribute('class','card-text');
            let idDescricao = 'idDescricao'+[i];
            pDescricao.setAttribute('id',idDescricao);
            cardBody.appendChild(pDescricao);    
            document.getElementById(idDescricao).append('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet consectetur adipisicing elit.');

            let divBetween = document.createElement('div')
            divBetween.setAttribute('class','d-flex justify-content-between align-items-center');
            cardBody.appendChild(divBetween);

            let btnGroup = document.createElement('div')
            btnGroup.setAttribute('class','btn-group');
            divBetween.appendChild(btnGroup);


            let btnVisualizar = document.createElement('button')
            btnVisualizar.setAttribute('class','btn btn-sm btn-outline-secondary');
            let idBtVisualizar = 'idBtVisualizar'+[i];
            btnVisualizar.setAttribute('id', idBtVisualizar);
            btnVisualizar.setAttribute('type','button');
            btnGroup.appendChild(btnVisualizar);
            document.getElementById(idBtVisualizar).append('Visualizar');

            let btnEditar = document.createElement('button')
            btnEditar.setAttribute('class','btn btn-sm btn-outline-secondary');
            let idBteditar = 'idBteditar'+[i];
            btnEditar.setAttribute('id', idBteditar);
            btnEditar.setAttribute('type','button');
            btnGroup.appendChild(btnEditar);
            document.getElementById(idBteditar).append('Editar');

            let idSmall = document.createElement('button')
            idSmall.setAttribute('class','text-muted border-0');
            let idTxtSmall = 'idTxtSmall'+[i];
            idSmall.setAttribute('id', idTxtSmall);
            idSmall.setAttribute('type','button');
            divBetween.appendChild(idSmall);
            document.getElementById(idTxtSmall).append('CLI-00'+usuarios[i].id);
                            
        }
    })
})

.catch(err => {
    console.log(err, "ERRO!")
})