function start(){
    while (true){
        var opcao = "sair";
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