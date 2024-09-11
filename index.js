/*
// hello world 
// comentário em js

var mensagem = "olá, mundo!"

const mensagemNaoAlterada = "não pode alterar com constante(const)"
// const é uma variavel que não muda o valor

console.log(mensagem);

// {} escopo - grupo de código 
// tudo escrito fora das chaves é uma variável global
// escrito dentro do escopo é variável local
// mensagemNãoalterada global e mensagemNãoAlterada local, mesmo nome mas variáveis diferentes por estarem dentro e fora do escopo
{
   const mensagemNaoAlterada = "variavel com o mesmo nome porém local"
   console.log(mensagemNaoAlterada);
}

console.log(mensagemNaoAlterada);
*/

// Arrays, objetos
/*
var metas = ["arthur","alo"]

console.log(metas[1] +", "+ metas[0]) //como é string caso tenha só o + contatena
*/

// semelhante a um dicionario em python: (utilizei value e checked mas posso definir os nomes desses atributos)
var meta = {
    //Armazena o valor associado ao objeto. Neste exemplo, o valor da meta é "ler um livro todo mês". Pode ser qualquer tipo de dado (texto, número, booleano, etc.)
    value: "ler um livro todo mês", //valor da meta


    //Geralmente utilizado para representar o estado de seleção ou de conclusão de algo. Neste caso, checked: false significa que a meta ainda não foi concluída.
    checked: false,
    
    // info são parâmetros
    log: (info) => {
        console.log(info)
    },

    isChecked: () => {
        if(meta.checked == true){
            console.log("Meta concluída.")
        } else {
            console.log("Meta não concluída.")
        }
    }
}

console.log(meta)
meta.value = "agora a meta é varrer a casa"
console.log(meta.value)
console.log(meta.checked)
meta.log(meta.value)
meta.isChecked()

// function

//1. arrow function
// pegando uma arrow function e atribuindo a uma variavel

// const criarMeta = () => {}

//2. named function
// e aqui criando uma função diretamente e chamando ela de criar meta

// function criarMeta() {}