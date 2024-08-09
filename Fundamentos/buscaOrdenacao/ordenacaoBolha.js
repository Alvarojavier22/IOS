function bubbleSort(arr){
    const n = arr.length;
    let trocou;

    do{
        trocou = false;
        for(let i = 0; i < n; i ++){
            if(arr[i] > arr [i + 1]){
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                trocou = true;
            }
        }
    }while(trocou);
    return arr;
}

const listaDesordenada = [42, 8, 16, 15, 4, 23];
const listaOrdenada = bubbleSort(listaDesordenada);

console.log("Lista ordenada: ", listaOrdenada);