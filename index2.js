const { select, input } = require('@inquirer/prompts')
//vai buscar dentro desse informação @inquirer/prompts o select
// importou o select do @inquirer/prompts

var metas = []

const cadastrarMeta = async() => {
    const meta = await input({message: "Digite a meta:"})

    if (meta.length == 0) {
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push({value: meta, checked: false})
}

function listarMetas() {
    if(metas.length == 0){
        console.log("Não há metas cadastradas.")
        return
    }
    for (var i = 0; i < metas.length; i++) {
        console.log(metas[i].value)
    }
}


async function start() {
//ou const start = async () => {}
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
                await cadastrarMeta()
                break;
            case "listar":
                listarMetas()
                break;
            case "sair":
                console.log("saindo..")
                return
        }
    } 
}

start()