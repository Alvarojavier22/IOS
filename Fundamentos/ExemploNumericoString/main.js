let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]);
console.log(numeros[2]);

numeros[1] = 10;
console.log(numeros);

numeros.push(6);
console.log(numeros);

numeros.pop();
console.log(numeros);

console.log(numeros.length);

numeros = [];
console.log(numeros);

var frutas = [];

frutas.push("macá");
frutas.push("banana");
frutas.push("laranja");

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

frutas[1] = "uva";
console.log(frutas);

console.log(frutas.length);

frutas.pop();
console.log(frutas);

console.log(frutas.includes("macá"));
console.log(frutas.includes("banana"));