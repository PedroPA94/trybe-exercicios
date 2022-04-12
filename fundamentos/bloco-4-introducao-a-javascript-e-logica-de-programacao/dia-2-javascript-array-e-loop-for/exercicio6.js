let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odds = 0;

for (let num of numbers) {
    if (num % 2 > 0) {
        odds += 1;
    };
};

if (odds === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(odds, "valores ímpares");
};