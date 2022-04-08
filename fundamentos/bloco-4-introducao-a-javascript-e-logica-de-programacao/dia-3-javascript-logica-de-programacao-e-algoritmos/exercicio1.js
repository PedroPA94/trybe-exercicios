function factorialOfNumber(number) {

    if (number < 0 || !Number.isInteger(number)) {
        console.log("Error: value must be a positive integer");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i += 1) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorialOfNumber(10));