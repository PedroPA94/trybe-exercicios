function indexOfSmallestNumber(arrayOfNumbers) {
    let index = 0;
    let smallestNumber = arrayOfNumbers[0];

    for (let number of arrayOfNumbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
            index = arrayOfNumbers.indexOf(number);
        };
    };

    return index;
};

let array = [2, 4, 6, 7, 10, 0, -3];

console.log(indexOfSmallestNumber(array));