let n = 9;

for (let i = 1; i <= n; i += 2) {

    if (i === n) {
        console.log("*".repeat(i));
    } else if (i === 1) {
        console.log(" ".repeat((n-i)/2) + "*".repeat(i) + " ".repeat((n-i)/2));
    } else {
        console.log(" ".repeat((n-i)/2) + "*" + " ".repeat(i-2) + "*" + " ".repeat((n-i)/2));
    };

};

// ******************
// Apenas usando 'for'
// ******************

console.log();

let asteriskString = "*";

for (let i = 1; i <= n; i += 2) {
    let [spacesLeft, spacesRight, spacesMiddle] = ["", "", ""];

    for (let j = 1; j <= (n - i)/2; j += 1) {
        spacesLeft += " ";
        spacesRight += " ";
    };

    for (let k = 2; k < i; k += 1) {
        spacesMiddle += " ";
    }

    if (i === 1) {
        console.log(spacesLeft + asteriskString + spacesRight);
    } else if (i !== n){
        console.log(spacesLeft + asteriskString + spacesMiddle + asteriskString + spacesRight);
    } else {
        for (let l = 1; l <= n - 1; l += 1) {
            asteriskString += "*";
        };
        console.log(asteriskString);
    };
};