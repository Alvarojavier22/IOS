function buscaBinaria(arr, elemento){
    let inicio = 0;
    let fim = arr.length -1;

    while(inicio <= fim){
        let meio = Math.floor((inicio + fim) / 2);
        if(arr[meio] === elemento){
            return true;
        }else if(arr [meio] < elemento){
            inicio= meio +1;
        }else{
            fim = meio - 1;
        }
    }
    return false;
}
const listaOrdenada = [1, 3, 5, 7, 9, 11, 13];
const numeroProcurado = 19;
if(buscaBinaria(listaOrdenada, numeroProcurado)){
    console.log(`O número ${numeroProcurado} foi encontrado na lista.`);
}else{
    console.log(`Ó numero ${numeroProcurado} nao foi encontrado na lista.`);
}