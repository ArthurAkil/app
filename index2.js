const { select } = require('@inquirer/prompts')
//vai buscar dentro desse informação @inquirer/prompts o select
// importou o select do @inquirer/prompts

//ou const start = async () => {
//                              }
async function start() {
    while (true){
        
        const opcao = await select({
            // toda função que possuir o await dentro dela ela é precisa do ASYNC no começo da função
            // o await esperando o usuário selecionar algo e quando selecionar algo o código continua, sem o await daria erro pois o código iria sem esperar o usuário selecionar
            // no select eu preciso de uma mensagem pra mostrar ao usuario e choices, obrigatorio os dois e choices deve ser um array
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch (opcao){
            case "cadastrar":
                console.log("vamos cadastrar")
                break;
            case "listar":
                console.log("vamos listar")
                break;
            case "sair":
                console.log("saindo..")
                return
        }
    } 
}

start()