let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greatestNumber = numbers[0];

for (let num of numbers) {
    if (num > greatestNumber) {
        greatestNumber = num;
    };
};

console.log(greatestNumber);