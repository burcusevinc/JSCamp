function friendNumbers(number1, number2){
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        } 
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            total2 = total2 + i
        } 
    }
    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " and " + number2 + " are friend numbers.")
    }
    else{
        console.log(number1 + " and " + number2 + " are not friend numbers.")
    }
}

friendNumbers(220,284)
friendNumbers(1,2)