const minimo = 0; // Define o valor mínimo do intervalo para adivinhação
const maximo = 10; // Define o valor máximo do intervalo para adivinhação

// Gera um número aleatório entre 'minimo' e 'maximo'
// Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo)
// Multiplicamos por (maximo - minimo + 1) para obter um intervalo correto
// E somamos 'minimo' para garantir que o número esteja dentro do intervalo desejado
const numeroadn = Math.floor(Math.random() * (maximo - minimo + 1) + minimo); 

let chute = ""; // Inicializa uma variável para armazenar o palpite do usuário
let acertou = false; // Inicializa uma variável que indica se o usuário acertou ou não

// Inicia um loop que permite ao usuário fazer até 3 tentativas
for (let contador = 0; contador < 3; contador++) {    
    // Solicita um palpite ao usuário através de um prompt, informando o intervalo
    chute = prompt(`Tente adivinhar o número entre ${minimo} e ${maximo}:`); 
    
    // Verifica se o palpite do usuário é igual ao número a ser adivinhado
    if (chute == numeroadn) {
        // Exibe uma mensagem de sucesso se o palpite estiver correto
        alert(`Parabéns, você acertou! O número era ${numeroadn}.`); 
        acertou = true; // Atualiza a variável 'acertou' para true, indicando que o usuário acertou
        break; // Sai do loop, pois o usuário já acertou
    }
    
    // Exibe uma mensagem informando que o palpite estava errado
    alert("Errado!"); 
}

// Após as tentativas, verifica se o usuário não acertou
if (!acertou) {
    // Informa ao usuário qual era o número correto se ele não acertou
    alert(`Infelizmente, você não acertou. O número era ${numeroadn}!`); 
}