var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var matriz1 = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900]
];

function imprimeMatriz(matriz){
    var header = "  ";

    for (var i = 0; i < matriz[0].length; i++){
        header += "C" + (i + 1) + " ";
    }

    console.log(header);

    for(var i = 0; i < matriz.length; i++){
        var linha = "L" + (i + 1) + ": " + matriz[i].join(" ");
        console.log(linha);
    }
}

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

imprimeMatriz(matriz);

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

imprimeMatriz(matriz);

console.log(matriz);

for(var i = 0; i < matriz.length; i++){
    for(var j = 0; j < matriz[i].length; j++){
        console.log('(' + (i+1) + ',' + (j + 1) + ')  ' + matriz[i] [j]);
    }
}

console.log(matriz[0] [0]);
console.log(matriz[1] [1]);
console.log(matriz[2] [2]);

matriz [1] [1] = 10;
console.log(matriz [1] [1]);

console.log(matriz);

function somaElementos(matriz){
    var soma = 0;

    for ( var i = 0; i < matriz.length; i++){
        for (var j = 0; j < matriz[i].length; j++){
            soma += matriz[i] [j];
        }
    }
    return soma;
}

console.log(somaElementos(matriz));

function somaMatrizes(matriz1, matriz2){
if(matriz1.length !== matriz2.length || matriz1[0].length !== matriz2[0].length){
    return null;
}

var matrizSoma = [];

for (var i = 0; i < matriz1.length; i++){
    matrizSoma[i] = [];
    for(var j = 0; j < matriz1.length; j++){
        matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}
return matrizSoma;
}

imprimeMatriz(somaMatrizes(matriz, matriz1));