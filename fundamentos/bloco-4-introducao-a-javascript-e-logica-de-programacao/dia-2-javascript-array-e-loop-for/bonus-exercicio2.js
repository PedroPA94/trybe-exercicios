let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i in numbers) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[i] > numbers[j]) {
            let holder = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = holder;
        };
    };
};

console.log(numbers);