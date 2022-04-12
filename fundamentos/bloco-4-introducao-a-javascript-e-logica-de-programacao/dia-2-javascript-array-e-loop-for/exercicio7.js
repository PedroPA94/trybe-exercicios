let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];

for (let num of numbers) {
    if (num < smallestNumber) {
        smallestNumber = num;
    };
};

console.log(smallestNumber);