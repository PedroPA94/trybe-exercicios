let word = 'tryber';
let reverseArray = [];

for (let letter of word) {
    reverseArray.unshift(letter);
}

let reversedString = reverseArray.join("");

console.log(reversedString);

// *************
// Outra maneira
// *************

reverseArray = [];

for (let i = word.length-1; i >= 0; i -= 1) {
    reverseArray.push(word[i]);
}

reversedString = reverseArray.join("");

console.log(reversedString);