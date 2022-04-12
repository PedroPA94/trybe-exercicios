let array = ['java', 'javascript', 'python', 'html', 'css'];

// Maior palavra do array

let longestWord = array[0];

for (let word of array) {
    if (word.length > longestWord.length) {
        longestWord = word;
    };
};

console.log(longestWord);

// Menor palavra do array

let shortestWord = array[0];

for (let word of array) {
    if (word.length < shortestWord.length) {
        shortestWord = word;
    };
};

console.log(shortestWord);