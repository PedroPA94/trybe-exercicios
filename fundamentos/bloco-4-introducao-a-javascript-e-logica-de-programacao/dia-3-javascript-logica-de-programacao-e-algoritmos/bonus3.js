let n = 5;

for (let i = 1; i <= n; i += 1) {
    console.log(" ".repeat(n-i) + "*".repeat(i));
};

// ******************
// Apenas usando 'for'
// ******************

console.log();

let asteriskString = "*";

for (let i = 1; i <= n; i += 1) {
    let spaces = "";

    for (let j = 1; j <= n - i; j += 1) {
        spaces += " ";
    };

    console.log(spaces + asteriskString);

    asteriskString += "*";
};