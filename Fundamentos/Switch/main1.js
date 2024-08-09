const numbers = [1, 2, 3, 4, 5, 6, -1, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        continue;
    }

    for (let j = i+1; j <numbers.length; j++){
        if(numbers[j] < 0){
            continue;
        }

        if(numbers[i] + numbers[j] === 10){
            console.log(`Pares que soman 10: ${numbers[i]}, ${numbers[j]}`);
            break;
        }
    }
}