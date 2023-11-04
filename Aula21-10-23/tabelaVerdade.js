
var resposta = prompt("Voce tem ais de 18?");

if(resposta < 18){
    alert("Voce é um adolecente");
} else if(parseInt(resposta) === 18){
    alert("Voce tem 18");
} else if(resposta > 18){
    alert("Voce é um adulto");
}
