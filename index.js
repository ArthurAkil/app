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