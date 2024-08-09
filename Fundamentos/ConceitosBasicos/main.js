function nomeDaFuncao(parametro1, parametro2, parametroN){

    return resultado;
}

function velocidadeMedia(distancia, tempo){
    let velocidadeMedia = distancia / tempo;
    console.log("A velocidade Média foi de ", velocidadeMedia, " de metros por minuto.");
}

const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia / tempo;
    console.log("Arrow Function ----------->")
    console.log("A velocidade Média foi de: ", velocidadeMedia, " Metros por minuto");
};


let numero1 = parseFloat(prompt("Digite a distancia (metros)"));
let numero2 = parseFloat(prompt("Digite o tempo (minutos)"));

_velocidadeMedia(numero1, numero2);
velocidadeMedia(numero1, numero2); 