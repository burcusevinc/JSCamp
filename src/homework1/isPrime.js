function isPrime(...numbers){
    for (let i = 0; i < numbers[i]; i++) {
        let control = 0
        for (let j = 2; j < numbers[i]; j++) {
            if(numbers[i] % j == 0){
                control++
            }      
        }
        if(numbers[i] == 1){
            console.log(numbers[i] + " is not a prime number")
        }
        else if(control == 0){
            console.log(numbers[i] + " is a prime number")
        }
        else{
            console.log(numbers[i] + " is not a prime number")
        }
    }
}

isPrime(1,3,4,21,9,7,13)