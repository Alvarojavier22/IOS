var vetor = [];

vetor.push("Maca");
vetor.push("Banana");

console.log(vetor);
vetor.unshift("Morango");

console.log(vetor);

var ultimoElemento = vetor.pop();

console.log(ultimoElemento);
console.log(vetor);

var primeiroElemento = vetor.shift();

console.log(primeiroElemento);
console.log(vetor);

console.log(vetor);

vetor[0] = "Péssego";
vetor[1] = "Cacau";
vetor.push("Alface");

console.log(vetor);