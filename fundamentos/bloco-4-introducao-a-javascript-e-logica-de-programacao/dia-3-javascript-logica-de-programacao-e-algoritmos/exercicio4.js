let greatestPrime = 1;

for (let i = 1; i <= 50; i += 1) {
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0) {
            break;
        } else if (j === i - 1) {
            greatestPrime = i;
            break;
        };
    };
};

console.log(greatestPrime);
