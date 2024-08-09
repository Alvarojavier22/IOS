let chamadasFibonacci = 0;

function fibonacciComContador(n){
    chamadasFibonacci++;
    if(n <= 1){
        return n;
    }else{
        return fibonacciComContador(n - 1) + fibonacciComContador(n - 2);
    }
}
const termo = 10;
const resultado = fibonacciComContador(termo);

console.log(`O ${termo}º termo de sequencia de Fibonacci é ${resultado}.`);
console.log(`A funcao foi chamada ${chamadasFibonacci} vezes.`);