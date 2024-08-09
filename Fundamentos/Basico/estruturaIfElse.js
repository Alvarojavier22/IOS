let idade = 18;

if (idade >= 18){
     console.log("Vocé é maior de idade.");
}else{
    console.log("Vocé é menor de idade.");
}

let mensagem = idade <= 18 ? "Vocé é maior de idade." : "Vocé é menor de idade.";
console.log(mensagem);

let possuiCarteira = true;

if(idade >= 18){
    console.log("Vocé é maior de idade.");

    if (possuiCarteira){
        console.log("Vocé pode dirigir.");
    }else{
        console.log("Vocé nao pode dirigir.");
    }
}else{
    console.log("Vocé é menor de idade");
}