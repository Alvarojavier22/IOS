let cores = ["azul", "preto", "branco"];
let notas = [8, 8.5, 10, 7]

for(let i =0; i< cores.length; i++){
    console.log(cores[i]);
}
for (let i = 0; i < notas.length; i++){
    console.log(notas[i]);
}

let soma = 0;
for (let i = 0; i < notas.length; i++){
    soma += (notas[i]);
}

console.log("soma = ", soma);
console.log("média = ", soma/notas.length);