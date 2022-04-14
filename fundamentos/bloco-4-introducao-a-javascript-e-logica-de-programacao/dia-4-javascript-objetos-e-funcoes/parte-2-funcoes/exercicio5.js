function mostRepeatedNumber(array) {
    let counter = 1;
    let counterNumber = array[0];
    let numberRepetitions = {};

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] in numberRepetitions) {
            numberRepetitions[array[i]] += 1;
        } else {
            numberRepetitions[array[i]] = 1;
        }
        if (numberRepetitions[array[i]] > counter) {
            counter = numberRepetitions[array[i]];
            counterNumber = array[i]
        }
    }
    return counterNumber;
}

let array = [2, 3, 2, 5, 8, 2, 3];

console.log(mostRepeatedNumber(array))