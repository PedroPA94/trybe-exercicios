let n = 5;

for (let i = 1; i <= n; i += 2) {
    console.log(" ".repeat((n-i)/2) + "*".repeat(i) + " ".repeat((n-i)/2));
};

// ******************
// Apenas usando 'for'
// ******************

console.log();

let asteriskString = "*";

for (let i = 1; i <= n; i += 2) {
    let [spacesLeft, spacesRight] = ["", ""];

    for (let j = 1; j <= (n - i)/2; j += 1) {
        spacesLeft += " ";
        spacesRight += " ";
    };

    console.log(spacesLeft + asteriskString + spacesRight);

    asteriskString += "**";
};