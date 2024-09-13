const { select, input, checkbox } = require('@inquirer/prompts')
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

const listarMetas = async() =>{
    const respostas = await checkbox({
        message: "Use as setas para mudar de metas, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa.",
        // "...metas" é jogar tudo de metas ai dentro - spreed operator 
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta selecionada.")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })
        
        meta.checked = true
    })

    console.log("Meta(s) macarada(s) como concluída(s).")
}

const metasRealizadas = async() =>{
    // sempre vai receber uma função
    // sempre que o retorno for verdadeiro, vai pegar o parametro e colocar em outra lista
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log("Não existem metas realizadas.")
        return
    }

    await select({
        message: "Metas realizadas.",
        choices: [...realizadas] //spread operator - nessa forma tá pegando tudo que dentro dentro de realizadas e jogando em um novo array
    })
}

const start = async () => {
    while(true){
        const opcao = await select({
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
                    name: "Metas realizadas",
                    value: "realizadas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                break
            case "listar":
                await listarMetas()
                break
            case "realizadas":
                await metasRealizadas()
                break
            case "sair":
                console.log('Até a próxima!')
                return 
        }
    }
}

start()