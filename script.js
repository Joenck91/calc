/* ---------------------- Variáveis Globais -------------------------------*/
let arrayValoresButtons = [];//ARMAZENA [primeiroValor,operadores,segundoValor] ANTES DE SER EXECUTADO UMA FUNÇÃO DE CÁLCULO
let primeiroValor = 0;//ARMAZENARÁ arrayValoresButtons[0]
let segundoValor = 0;//ARMAZENARÁ arrayValoresButtons[2]
let resultado = 0;//ARMAZENARÁ O RESULTADO DO CALCULO
let visor = document.getElementById('visor');//ALTERA O ELEMENTO HTML QUE MOSTRA O VISOR DA CALCULADORA

//*********** VARIAVEIS DA TABELA DE HISTORICO DAS OPERAÇÕES************
let historyTable = [];//O quadro do histórico será um array que mostrará cada linha com um indice
let tableRow = document.getElementById('tablerow')//Altera o elemento HTML da tabela de histórico
let register = new Date(); // Captura a data e o horário atual
let datetime = register.toLocaleString(); // Formata a data e a hora em uma única string
let object = {
    date: datetime,
    calc: arrayValoresButtons
};

/*---------------------------------------Funções globais ----------------------------*/
//FUNÇÃO SOMA
function sum(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
};
//FUNÇÃO DE SUBTRAÇÃO
function subtract(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
};
//FUNÇÃO DE MULTIPLICAÇÃO
function multiply(primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
};
//FUNÇÃO DE DIVISÃO
function split(primeiroValor, segundoValor) {
    if (segundoValor === 0) {
        alert('Não da para dividir por 0.')
        return null;
    }
    return primeiroValor / segundoValor;
};
//FUNÇÃO QUE EXECUTA AS OPERAÇÕES
function iqual() {//Função chamada quando clicado no botão = ou quando a operação se estender para um segundo operador. Assim ela resolve a operação entre o primeiro e segundo numero primeiro.    
    let primeiroValor = Number(arrayValoresButtons[0]);//Converte o primeiro array de string para numero antes de executar a operação.
    let segundoValor = Number(arrayValoresButtons[2]);//Converte o segundo array de string para numero antes de executar operação.

    switch (arrayValoresButtons[1]) {//Analisa qual tipo de operação deve executar
        case "/":
            resultado = split(primeiroValor, segundoValor);//Executa operação de divisão e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            upDateTable();//Chama função que organiza o histórico
            arrayValoresButtons = [];//Zera o array com os dados para operação
            //console.log(`O resultado é ${resultado}.`);
            //console.log(arrayValoresButtons);
            return;

        case "+":
            resultado = sum(primeiroValor, segundoValor); //Executa operação de soma e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            upDateTable();//Chama função que organiza o histórico
            arrayValoresButtons = [];//Zera o array com os dados para operação
            //console.log(`O resultado é ${resultado}.`);
            //console.log(arrayValoresButtons);
            return;
        case "-":
            resultado = subtract(primeiroValor, segundoValor); //Executa operação de subtração e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            upDateTable();//Chama função que organiza o histórico
            arrayValoresButtons = [];//Zera o array com os dados para operação
            //console.log(`O resultado é ${resultado}.`);
            //console.log(arrayValoresButtons);
            return;
        case "x":
            resultado = multiply(primeiroValor, segundoValor); //Executa operação de multiplicação e armazena resultado
            visor.textContent = `${arrayValoresButtons.join('')} = ${resultado}`;//Mostra operação completa no visor
            upDateTable();//Chama função que organiza o histórico
            arrayValoresButtons = [];//Zera o array com os dados para operação
            //console.log(`O resultado é ${resultado}.`);
            //console.log(arrayValoresButtons);
            return;
    }
}
//ATUALIZA A TABELA DE HISTÓRICO DE OPERAÇÕES
function upDateTable() {
    let tableRow = document.getElementById('tablerow')//Altera o elemento HTML da tabela de histórico
    let register = new Date(); // Captura a data e o horário atual
    let datetime = register.toLocaleString(); // Formata a data e a hora em uma única string
    let object = {
        date: datetime,
        calc: [...arrayValoresButtons]
    };

    //ADICIONA AS OPERAÇÕES NO ARRAY
    if (historyTable.length >= 4) {//Se tiver 4 indices(linhas na tabela), retirar a primeira para dar espaço a ultima
        historyTable.pop();
    }
    historyTable.unshift(object);//Adiciona nova operação ao ultimo indice
    console.log(historyTable);
    rowHtml();
    return;
};
//CRIA AS LINHAS DA TABELA DE HISTÓRICO DE OPERAÇÕES
function rowHtml() {
    tableRow.innerHTML = "";//Limpa os dados da tablea para não ocorrer duplicação de linhas.

    //Loop que percorre sobre os indices do array para criar uma linha com cada indice
    historyTable.forEach(object => {
        const row = document.createElement('tr');//Cria uma linha.
        const datetimeColumn = document.createElement('td');//Cria a celula do tempo
        datetimeColumn.textContent = object.date;//Coloca datetime no conteudo da celula
        const tdButton = document.createElement('td');//Cria celula das operações.
        const calcButton = document.createElement('button');//Cria botão que terá as operções
        calcButton.classList.add('history_table_button');//Adiciona uma classe ao botão
        calcButton.textContent = object.calc.join("");//Coloca arrayValoresButtons no conteudo da celula.

        // ADICIONA OUVINTE PARA CAPTURA DO BOTÃO E CONVERTE DE STRING PARA ARRAY NOVAMENTE
        calcButton.addEventListener('click', (event) => {
        console.log("chegou"); // Verifica se o evento está sendo disparado
        arrayValoresButtons = event.target.textContent; // Atualiza arrayValoresButtons com o valor do botão clicado
        arrayValoresButtons = arrayValoresButtons.match(/\d+|[^\d]/g); // Expressão regular para capturar números e operadores
        visor.textContent = arrayValoresButtons.join("");
        }); 
       
        row.appendChild(datetimeColumn);//Adiciona a celula á linha
        row.appendChild(tdButton);//adiciona a celula á linha
        tdButton.appendChild(calcButton);
        tableRow.appendChild(row);//Coloca a linha na tabela
    }
    );
}
//TRATA OS VALORES CAPTURADOS NO EVENTO CLICK
function aposClique(valor) {// Função que faz o tratamento dos dados dos botões clicados.
    //SE VALOR É UMA OPERAÇÃO DO HISTÓRICO
    if (typeof valor === 'string' && valor.includes(' ')){
       arrayValoresButtons = arrayValoresButtons = valor.match(/\d+|[^\d]/g); // Expressão regular para capturar números e operadores
        console.log(arrayValoresButtons);
        return;
    }


    //SE FOR CLICADO EM 'C'
    if (valor == "c") { //Sempre que clicar no "c", vai reinicar a calculadora
        arrayValoresButtons = []; //Reinica a calculados
        historyTable = [];//Reinicia o histórico
        visor.textContent = "Calculadora reiniciada";//Mostra a operação no visor da calculadora.
        //console.log(`Botão ${valor} clicado. Array zerado`);
        //console.log(arrayValoresButtons);
        return;
    }
    //SE FOR NUMERO
    if (isNaN(valor) == false) { // Se for numero.
        //DEFINE PRIMEIRO NUMERO
        if (arrayValoresButtons[0] == null) { //Se o array 0 estiver vazio, coloca o primeiro numero no array 0.
            arrayValoresButtons[0] = valor;//Acrescenta o valor do botão no primeiro indice do array.
            visor.textContent = arrayValoresButtons.join(""); //Mostra a operação no visor da calculadora.
            //console.log(`Primeiro clique foi no numero ${valor}`);
            //console.log(arrayValoresButtons);
            return;
        };
        //NÃO DEIXA REPETIR NUMERO 0 NOS PRIMEIROS DIGITOS DO PRIMEIRO NUMERO
        if (arrayValoresButtons[0] == 0 && valor == 0) { // Se primeiro numero for 0 e o valor atual for 0, vai manter o primeiro numero como 0.
            arrayValoresButtons[0] = valor;// Mantém valor 0
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            //console.log("Numero 0 foi clicado novamente")
            return;
        }
        //CRIA O SEGUNDO DIGITO DO PRIMEIRO NUMERO
        if (arrayValoresButtons[0] != null && arrayValoresButtons[1] == null) {//Se primeiro numero esta definido e o operador não foi definido, acrescenta o valor como mais um digito do primeiro numero.
            arrayValoresButtons[0] += valor;//Soma o valor do botão clicado com o valor do indice 0, assim cria um numero de 2 digitos.
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            //console.log(`Adicionado o numero ${valor} ao primeiro valor da operação resultando em ${primeiroValor}`);
            //console.log(arrayValoresButtons);
            return;
        };
        //CRIAR O SEGUNDO NUMERO
        if (arrayValoresButtons[1] != null && arrayValoresButtons[2] == null) { //Se o operador esta definido, coloca segundo numero no array 2.
            arrayValoresButtons[2] = valor;//adiciona valor do clique no indice 2 do
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            //console.log(`Segundo valor escolhido foi ${valor}`);
            // console.log(arrayValoresButtons);
            return;
        };
        //CRIA O SEGUNDO DIGITO DO SEGUNDO NUMERO
        if (arrayValoresButtons[2] != null) {//Se o segundo numero esta definido, acrescenta valor como segundo digito do segundo numero.
            arrayValoresButtons[2] += valor;//Soma valor do segundo numero com o do proximo xlique
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            // console.log(`Adicionado numero ${valor} ao segundo valor da operação resultando em ${arrayValoresButtons[2]}. `);
            //console.log(arrayValoresButtons);
            return;
        };
    }
    //SE NÃO FOR NUMERO
    if (isNaN(valor)) {// se não for numero

        //MENSAGEM "INICIE COM NUMEROS"
        if (arrayValoresButtons[0] == null) {//Se não tem o primeiro numero, imprimi mensagem "Inicie com nummeros".
            visor.textContent = "Inicie com números";//Exibe mensagem no visor
            return;
        }
        //DEFINE OPERADOR
        if (arrayValoresButtons[0] != null && arrayValoresButtons[2] == null && valor != arrayValoresButtons[1]) { // se o primeiro numero ja está definido, operador e segundo numero não
            switch (valor) {
                case "/":
                case "x":
                case "-":
                case "+":
                    arrayValoresButtons[1] = valor;//Recebe a string do operador clicado
                    visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
                    //console.log(`Foi escolhido o operador '${valor}'.`);
                    //console.log(arrayValoresButtons);
                    return;
            }
        }
        //SE CLICAR EM '=' SEM DEFINIR O SEGUNDO NUMERO, DEFINE O SEGUNDO NUMERO IGUAL O PRIMEIRO
        if (arrayValoresButtons[1] != null && valor == "=" && arrayValoresButtons[2] == null) {
            arrayValoresButtons[2] = arrayValoresButtons[0];
            visor.textContent = arrayValoresButtons.join("");
            //console.log("Primeiro numero adicinado ao segundo numero para calcular");
            //console.log(arrayValoresButtons);
            return;
        }
        //SE CLICAR 2 VEZES NO MESMO OPERADOR, DEFINE O SEGUNDO NUMERO IGUAL O PRIMEIRO
        if (arrayValoresButtons[1] != null && valor == arrayValoresButtons[1] && arrayValoresButtons[2] == null) {//Se o operador ja foi definido 
            arrayValoresButtons[2] = arrayValoresButtons[0];//Segundo numero recebe o primeiro
            visor.textContent = arrayValoresButtons.join("");//Mostra a operação no visor da calculadora.
            // console.log("Primeiro numero adicinado ao segundo numero para calcular");
            //console.log(arrayValoresButtons);
            return;
        }
        //FAZ MAIS OPERAÇÕES COM O RESULTADO DA OPERAÇÃO ANTERIOR
        if (arrayValoresButtons[2] != null) { //Se o segundo valor ja esta definido
            switch (valor) {
                case "/":
                case "x":
                case "-":
                case "+":
                    iqual();
                    arrayValoresButtons[0] = resultado;
                    arrayValoresButtons[1] = valor;
                    visor.textContent = arrayValoresButtons.join("");
                    // console.log(`Continua operando usando ${valor}.`);
                    // console.log(arrayValoresButtons);
                    return;
                case "=":
                    iqual();
                    return;
            }

        }
    }
}

/*------------------------Captura dados dos botões--------------------------------*/

document.addEventListener('DOMContentLoaded', () => { //Adiciona um evento assim que o Dom for totalmente carregado.
    
    //CAPTURA DADOS DOS BOTÕES DA CALCULADORA
    const button = document.querySelectorAll('button'); //seleciona todos os botões
    button.forEach((button) => { // adiciona um evento de clique a cada botão
        button.addEventListener("click", (event) => { //Captura o evento clique no elemento Button
            const valorButton = event.target.textContent; // Pega o valor do botão clicado
            aposClique(valorButton); //Chama a função aposclique() para tratar os dados do botões clicados
        });
    });


});

