let carro = {
    marca: "Fiat",
    preco: 28.789,
    modelo: "Mobi"
}
let pessoa = {
    nome: "Guilherme",
    idade: 23,
    tamanho: 1.78,
    rua: "Avenida visconde do rio branco"
}

alert("Boa tarde " + pessoa.nome + " sua idade é " + pessoa.idade + " você possui " + pessoa.tamanho + " metros e mora na " + pessoa.rua);



function Gato(nomePassado, racaPassada){
    this.nome = nomePassado;
    this.raca = racaPassada;
}
let gatoLico = new Gato("Lico", "Siames");
let gatoJuba = new Gato("Juba", "Pe duro");
console.log(gatoJuba);
console.log(gatoLico);

