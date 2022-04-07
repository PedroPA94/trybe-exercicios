let numbers = [];

for (let i = 1; i <=25; i += 1) {
    numbers.push(i);
};

for (let num in numbers) {
    console.log(num / 2);
};