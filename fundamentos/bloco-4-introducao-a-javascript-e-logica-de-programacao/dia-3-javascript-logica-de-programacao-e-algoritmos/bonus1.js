let n = 10;

for (let i = 1; i <= n; i += 1) {
    console.log("*".repeat(n));
};

// ******************
// Apenas usando 'for'
// ******************

console.log()

for (let i = 1; i <= n; i += 1) {
    let asteriskString = "*"
    
    for (let j = 1; j <= n - 1; j += 1) {
        asteriskString += "*";
    };

    console.log(asteriskString)
};