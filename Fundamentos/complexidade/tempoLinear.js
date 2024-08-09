function encontrarElemento(array, alvo){
    for(let i = 0; i < array.length; i++){
        if(array[i] === alvo){
            return i;
        }
    }
    return -1;
}
const lista = [1, 2, 3, 4, 5, 10, 11, 13];
const alvo = 13;
const indice = encontrarElemento(lista, alvo);

if(indice !== -1){
    console.log(`Elemento ${alvo} encontrado no indice: ${indice}.`);
}else{
    console.log(`Elemento ${alvo} nao encontrado na lista.`);
}