function dividir(a, b){
    if(b === 0){
        throw new Error("Divisao por zero nao e permitida!");
    }
    return a /b;
}
try{
    const resultado = dividir(10, 2);
    console.log(resultado);
}catch(error){
    console.log("Ocorreu um erro: ", error.message);
}finally{
    console.log("Operacao de divisao finalizada");
}