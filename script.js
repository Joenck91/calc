/* ---------------------- Variáveis Globais -------------------------------*/
let arrayValoresButtons = [];
let primeiroValor = 0;
let segundoValor = 0;
let operador = 0;
let resultado = 0;
let visor = document.getElementById('visor');



/*---------------------------------------Funções globais ----------------------------*/

function sum(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
};
function subtract(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
};
function multiply(primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
};
function split(primeiroValor, segundoValor) {
    if (segundoValor === 0) {
        alert('Não da para dividir por 0.')
        return null;
    }
    return primeiroValor / segundoValor;
};
function iqual() {
    //executar a operação
    primeiroValor = Number(arrayValoresButtons[0]);
    segundoValor = Number(arrayValoresButtons[2]);
    operador = arrayValoresButtons[1];
    switch(operador){
        case "/":
            resultado = split(primeiroValor,segundoValor);
            visor.textContent = resultado;
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];
            return;
        case "+":
            resultado = sum(primeiroValor, segundoValor);
            visor.textContent = resultado;
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];            
            return;
        case "-":
            resultado = subtract(primeiroValor, segundoValor);
            visor.textContent = resultado;
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];
            return;
        case "x":
            resultado = multiply(primeiroValor, segundoValor);
            visor.textContent = resultado;
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];
            return;

    }
    arrayValoresButtons = []
    console.log(arrayValoresButtons);

}
function zerar(valor) {
    console.log(`Botão '${valor}' foi clicado e array zerado.`);
    return arrayValoresButtons = [];
}
function aposClique(valor) {// Função que faz o tratamento dos dados bos botões clicados.
    if (isNaN(valor) == false) { // Se for numero.
        if (arrayValoresButtons[0] == null) { //Se o array que guarda os dados da operação estiver vazio.
            arrayValoresButtons[0] = valor;//Acrescenta o valor do botão no primeiro indice do array.
            primeiroValor = arrayValoresButtons[0];//A variável primeiroValor recebe o indice 0 do array.
            visor.textContent = arrayValoresButtons.join("");
            console.log(`Primeiro clique foi no numero ${primeiroValor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if(arrayValoresButtons[0] == 0 && valor == 0){
            arrayValoresButtons[0] = 0;
            visor.textContent = arrayValoresButtons.join("");
            return;
        }
        if (arrayValoresButtons[0] != null && arrayValoresButtons[1] == null) {//Se os indice 0 do array estiver cheio e o 1 não.
            arrayValoresButtons[0] += valor;//Soma o valor do botão clicado com o valor do indice 0, assim cria um numero de 2 digitos.
            primeiroValor = arrayValoresButtons[0];//Atualiza o valor do primeiro numero da operação.
            visor.textContent = arrayValoresButtons.join("");
            console.log(`Adicionado o numero ${valor} ao primeiro valor da operação resultando em ${primeiroValor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0, 1] != null && arrayValoresButtons[2] == null) { //Se o primeiro e o segundo indices do array não estiverem vazios e o valor for number
            arrayValoresButtons[2] = valor;
            segundoValor = arrayValoresButtons[2];
            visor.textContent = arrayValoresButtons.join("");
            console.log(`Segundo valor escolhido foi ${valor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0, 1, 2] != null && isNaN(valor) == false) {
            arrayValoresButtons[2] += valor;
            visor.textContent = arrayValoresButtons.join("");
            console.log(`Adicionado numero ${valor} ao segundo valor da operação resultando em ${arrayValoresButtons[2]}. `);
            console.log(arrayValoresButtons);
            return;
        };

    } else {// se não for numero
        if (arrayValoresButtons[0] == null) {
            alert("Escolha um numero");
        } else {
            switch (valor) {
                case "c":
                    arrayValoresButtons = [];
                    visor.textContent = arrayValoresButtons.join("");
                    console.log(`Botão ${valor} clicado. Array zerado`);
                    console.log(arrayValoresButtons);
                    return;
                case "=":
                    if(arrayValoresButtons[2] == null){
                        arrayValoresButtons[2] = arrayValoresButtons[0];
                        visor.textContent = arrayValoresButtons.join("");
                    }
                    iqual();
                    return;
                case "/":
                case "x":
                case "-":
                case "+":
                    arrayValoresButtons[1] = valor;
                    visor.textContent = arrayValoresButtons.join("");
                    console.log(`Foi escolhido o operador '${valor}'.`);
                    console.log(arrayValoresButtons);
                    return;

            }
        }
    }
}



/*------------------------Captura dados dos botões--------------------------------*/

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelectorAll('button'); //seleciona todos os botões
    button.forEach((button) => { // adiciona um evento de clique a cada botão
        button.addEventListener("click", (event) => {
            const valorButton = event.target.textContent; // Pega o valor do botão clicado
            aposClique(valorButton);


        });
    });
});

