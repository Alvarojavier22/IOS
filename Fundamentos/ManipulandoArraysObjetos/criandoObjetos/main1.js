function insertValueIntodiv(value){
    const divElement = document.getElementById('myDiv');

    if( divElement) {
        divElement.innerText += value + "\n";
    }else{
        console.log('Div nao encontrado no HTML.');
    }
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pessoas = [];

for (let i = 0; i < 10; i++){
    let pessoa = {
        nome: "Pessoa " + (i +1),
        idade: getRandomNumber(20, 60),
        peso: getRandomNumber(50, 100)
    };
    pessoas.push(pessoa);
}

for (let i = 0; i < pessoas.length; i++){
    console.log(pessoas[i]);
    console.log("------------------------");
}

console.log(pessoas[2]);
console.log(pessoas[9].peso);
console.log(pessoas[0].idade);

for (let i = 0; i < pessoas.length; i++){
    insertValueIntodiv("Pessoa " + (i + 1) + ":");
    insertValueIntodiv("Nome: " + pessoas[i].nome);
    insertValueIntodiv("Idade: " + pessoas[i].idade);
    insertValueIntodiv("Peso: " + pessoas[i].peso);
    insertValueIntodiv("-------------------------------");
}