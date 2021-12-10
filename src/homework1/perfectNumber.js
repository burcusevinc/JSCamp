let perfectNumber = function(){
    for (let i = 1; i <= 1000; i++) {
        let total = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if (total == (i * 2)) {
            console.log(i + " is a perfect number") 
        }    
    }
}
perfectNumber()