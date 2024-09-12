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
function iqual() {//Função chamada quando clicado no botão = ou quando a operação se estender para um segundo operador. Assim ela resolve a operação entre o primeiro e segundo numero primeiro.

    primeiroValor = Number(arrayValoresButtons[0]); //Definindo primeiro número da operação
    segundoValor = Number(arrayValoresButtons[2]); //Definindo o segundo número da operação
    operador = arrayValoresButtons[1]; //Definindo o operador que será usado

    switch (operador) {
        case "/":
            resultado = split(primeiroValor, segundoValor);//Executa operação de divisão e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`; //Mostra operação completa no visor
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = []; //Zera o array para iniciar próximo calculo
            return;
        case "+":
            resultado = sum(primeiroValor, segundoValor); //Executa operação de soma e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];//Zera o array para iniciar próximo calculo
            return;
        case "-":
            resultado = subtract(primeiroValor, segundoValor); //Executa operação de subtração e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];//Zera o array para iniciar próximo calculo
            return;
        case "x":
            resultado = multiply(primeiroValor, segundoValor); //Executa operação de multiplicação e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            console.log(`O resultado é ${resultado}.`);
            arrayValoresButtons = [];//Zera o array para iniciar próximo calculo
            return;
    }
}
function aposClique(valor) {// Função que faz o tratamento dos dados dos botões clicados.
    if (isNaN(valor) == false) { // Se for numero.
        if (arrayValoresButtons[0] == null) { //Se o array que guarda os dados da operação estiver vazio.
            arrayValoresButtons[0] = valor;//Acrescenta o valor do botão no primeiro indice do array.
            visor.textContent = arrayValoresButtons.join(""); //Mostra a operação no visor da calculadora.
            console.log(`Primeiro clique foi no numero ${primeiroValor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0] == 0 && valor == 0) { // Se primeiro numero for 0 e o valor atual for 0
            arrayValoresButtons[0] = valor;// Mantém valor 0
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            console.log("Numero 0 foi clicado novamente")
            return;
        }
        if (arrayValoresButtons[0] != null && arrayValoresButtons[1] == null) {//Se os indice 0 do array estiver cheio e o 1 não.
            arrayValoresButtons[0] += valor;//Soma o valor do botão clicado com o valor do indice 0, assim cria um numero de 2 digitos.
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            console.log(`Adicionado o numero ${valor} ao primeiro valor da operação resultando em ${primeiroValor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0, 1] != null && arrayValoresButtons[2] == null) { //Se o primeiro e o segundo indices do array não estiverem vazios e o valor for number
            arrayValoresButtons[2] = valor;//adiciona valor do clique no indice 2 do
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            console.log(`Segundo valor escolhido foi ${valor}`);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0, 1, 2] != null && isNaN(valor) == false) {//Se nenhum indice do array estiver vazio e valor ser do tipo number
            arrayValoresButtons[2] += valor;//Soma valor do segundo numero com o do proximo xlique
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            console.log(`Adicionado numero ${valor} ao segundo valor da operação resultando em ${arrayValoresButtons[2]}. `);
            console.log(arrayValoresButtons);
            return;
        };
        if (arrayValoresButtons[0, 1, 2] != null && isNaN(valor)) {// Se o primeiro numero, o operador e o segundo numero ja foram clicados e o valor do botão não é numero
            iqual();// Resolve a equação
            arrayValoresButtons[0] = resultado;//Coloca o resultado da equação como primeiro numero da proxima operação
            arrayValoresButtons[1] = valor;//Usa o operador clicado depois que a ultima operação ja tinha sido montada
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            return;
        }
    } else if (arrayValoresButtons[2] != null && valor != '=') { //Se o segundo valor ja foi escolhido e o valor não é do botão =. Isso quer dizer que a operação vai se estender para um terceiro numero.
        iqual();//Chama iqual() para resolver a operação do primeiro e segundo numero
        arrayValoresButtons[0] = resultado; //Como iqual() zera o array, temos que colocar o resultado como primeiro numero de um novo array
        arrayValoresButtons[1] = valor; //Devido a condição, sabemos que o valor do botão clicado é operador, então armazenamos no array para fazer a próxima operação.
        visor.textContent = arrayValoresButtons.join(""); //Mostra a operação no visor da calculadora.
        return;
    }
    else {// se não for numero
        if (arrayValoresButtons[0] == null) {//Se o array estiver vazio
            visor.textContent = "Inicie com números";//Exibe mensagem no visor
        } else {
            switch (valor) {
                case "c":
                    arrayValoresButtons = []; //Esvazia o array
                    visor.textContent = "Calculadora reiniciada";//Mostra a operação no visor da calculadora.
                    console.log(`Botão ${valor} clicado. Array zerado`);
                    console.log(arrayValoresButtons);
                    return;
                case "=":
                    if (arrayValoresButtons[1] == null) {// Se só  for digitado o primeiro numero e depois clicado em =, manterá o mesmo primeiro numero
                        arrayValoresButtons[0];//Mantem o primeiro numero clicado.
                        visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
                    } else if (arrayValoresButtons[2] == null) { // Se o segundo numero não foi escolhido
                        arrayValoresButtons[2] = arrayValoresButtons[0];//Faz com que o segundo numero seja igual o primeiro.
                        visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
                    }
                    iqual();
                    return;
                case "/":
                case "x":
                case "-":
                case "+":
                    arrayValoresButtons[1] = valor;//Recebe a string do operador clicado
                    visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
                    console.log(`Foi escolhido o operador '${valor}'.`);
                    console.log(arrayValoresButtons);
                    return;

            }

        }
    }

}



/*------------------------Captura dados dos botões--------------------------------*/

document.addEventListener('DOMContentLoaded', () => { //Adiciona um evento assim que o Dom for totalmente carregado.

    const button = document.querySelectorAll('button'); //seleciona todos os botões
    button.forEach((button) => { // adiciona um evento de clique a cada botão
        button.addEventListener("click", (event) => { //Captura o evento clique no elemento Button
            const valorButton = event.target.textContent; // Pega o valor do botão clicado
            aposClique(valorButton); //Chama a função aposclique() para tratar os dados do botões clicados
        });
    });
});

