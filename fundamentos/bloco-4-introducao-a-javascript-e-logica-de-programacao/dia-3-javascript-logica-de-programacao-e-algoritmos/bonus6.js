let n = 53;

for (let i = 2; i <= n - 1; i += 1) {
    if (n % i === 0) {
        console.log(n + " não é primo e é divisível, ao menos, por " + i);
        break;
    } else if (i === n - 1) {
        console.log(n + " é primo");
    };
};