function arrayOfNumbers(vector) {
    let newArray = [];
    vector = vector.flat();
    for (let number of vector) {
        if (number % 2 === 0) {
            newArray.push(number)
        }
    }
    return newArray
}

// **************
// Apenas com for
// **************

function arrayOfNumbers2(vector) {
    let newArray = [];
    for (let array of vector) {
        for (let number of array) {
            if (number % 2 === 0) {
                newArray.push(number)
            }
        }
    }
    return newArray
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(arrayOfNumbers(vector));
console.log(arrayOfNumbers2(vector));