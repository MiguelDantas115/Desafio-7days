// scripts.js
//Aqui, getElementById("submit") é usado para selecionar o botão com ID "submit". O método addEventListener é então chamado para adicionar um evento de clique que executa a função anônima quando o botão é clicado
document.getElementById("submit").addEventListener("click", function () {
//-------------------------------------------------------------------------------
    // Captura os valores dos campos
    //Cada linha utiliza getElementById para acessar os campos de entrada pelos seus IDs ("nome", "numero" e "linguagem") e obter seus valores. O .value é usado para capturar o que o usuário digitou nesses campos.
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("numero").value;
    const linguagem = document.getElementById("linguagem").value;
//-----------------------------------------------------------------------------------------
    // Exibe a mensagem na tela
    //Uso do alert: A função alert(mensagem) exibe um alerta na tela com a mensagem personalizada que foi construída. O alerta é uma janela pop-up que informa o usuário sobre algo, neste caso, uma saudação personalizada.
    const mensagem = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    alert(mensagem);
//------------------------------------------------------------------------
// Limpa os campos do formulário, 
//Após exibir a mensagem, getElementById é novamente utilizado para acessar cada campo e definir seu valor como uma string vazia ("").
// Isso limpa os campos do formulário, permitindo que o usuário insira novos dados.
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("linguagem").value = "";
});