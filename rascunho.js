let historyTable = [];//O quadro do histórico será um array que mostrará cada linha com um indice

//Cada linha terá um objeto com data e hora completa e ultima operação realizada
let registro = new Date(); // Captura a data e o horário atual
let dataHora = registro.toLocaleString(); // Formata a data e a hora em uma única string
let historyLine = { // Objeto com os dados
    dataHoraCompleta:dataHoraCompleta,
    resultado:resultado
}
