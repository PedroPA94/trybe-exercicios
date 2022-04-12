function indexOfGreatestNumber(arrayOfNumbers) {
    let index = 0;
    let greatestNumber = arrayOfNumbers[0];

    for (let number of arrayOfNumbers) {
        if (number > greatestNumber) {
            greatestNumber = number;
            index = arrayOfNumbers.indexOf(number);
        };
    };

    return index;
};

let array = [2, 3, 6, 7, 10, 1];

console.log(indexOfGreatestNumber(array));