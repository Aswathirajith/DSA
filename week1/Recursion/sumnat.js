function sumOfNaturalNumbers(n) {
    if (n === 0) { 
        return 0;
    } else {
        return n + sumOfNaturalNumbers(n - 1); 
    }
}


console.log(sumOfNaturalNumbers(5)); 
