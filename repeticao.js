const prompt = require('prompt-sync')();

const nomes = []

let nome = ""

while (nome !== "sair") {

    nome = prompt("Digite um nome (ou sair para encerrar): ")

    if(nome !== "sair"){
        nomes.push(nome)
    }    
}
console.log(nomes)