const a = 10;
const b = 0;
const c = 30;

if (a === b && a === c) {
    console.log("Os valores são iguais");
} else if (a > b && a > c) {
    console.log("O maior valor é " + a);
} else if (b > c) {
    console.log("O maior valor é " + b)
} else {
    console.log("O maior valor é " + c)
}