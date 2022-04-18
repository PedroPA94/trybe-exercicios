function summation(n) {
    if (n < 0 || !Number.isInteger(n)) {
        console.log('Error: number must be a positive integer');
        return;
    }
    
    let sum = 0;

    for (i = 1; i <= n; i += 1) {
        sum += i
    }

    return sum;
}

let n = 5;

console.log(summation(n));