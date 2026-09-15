
//Input de entrada de dados

function entradaBotao() {
    //Pegar o valor digitado no campo
    let nome = document.getElementById("nome").value;
    let servico = document.getElementById("servico").value;


    //Exibe o resultado na própria página
    document.getElementById("resultado").innerHTML = "Olá " + nome + " que tem " + servico + " pra fazer! Seja bem vindo!";

}
