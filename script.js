
// Input de entrada de dados
function entradaBotao() {
    // Pegar o valor digitado no campo
    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servico").value;

    //Variaveis temporarias
    let respostaServico = "";
    let respostaValor = 0;

    //Em caso de nome vazio
    if (nome.trim() === "") {
        document.getElementById("resultado").innerHTML = "";
        alert("Por favor, digite seu nome.");
        return; //Encerra aqui
    }

    //Escolhas
    if (servico == "formatacao") {
        respostaServico = "Formatação de computador";
        respostaValor = 120;

    } else if (servico == "limpeza") {
        respostaServico = "Limpeza e manutenção";
        respostaValor = 80;

    } else if (servico == "programas") {
        respostaServico = "Instalação de programas";
        respostaValor = 50;

    } else if (servico == "backup") {
        respostaServico = "Backup de arquivos";
        respostaValor = 100;

    } else {
        //Caso o usuário não escolha nada
        document.getElementById("resultado").innerHTML = "";
        alert("Por favor, escolha uma opção de serviço.");
        return; //Encerra aqui
    }

    //Resultado com Template Literals
    document.getElementById("resultado").innerHTML = `
        <strong>Orçamento</strong><br><br>
        Olá, ${nome}!<br><br>
        Serviço escolhido: ${respostaServico}<br><br>
        Valor do serviço: R$ ${respostaValor},00 <br><br>`;
}
