let n = 5;

for (let i = 1; i <= n; i += 1) {
    console.log("*".repeat(i));
};

// ******************
// Apenas usando 'for'
// ******************

console.log()

let asteriskString = "*";

for (let i = 1; i <= n; i += 1) {

    console.log(asteriskString);
    asteriskString += "*";
    
};