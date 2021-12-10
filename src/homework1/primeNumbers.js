function primeNumbers(){
    for (let i = 2; i <= 1000; i++) {
        let control = 0
        for (let j = 2; j < i; j++) {
            if(i % j == 0){
                control++
            }      
        }
        if(control == 0){
            console.log(i + " is a prime number")
        }
        else{
            console.log(i + " is not a prime number")
        }
    }
}

primeNumbers()