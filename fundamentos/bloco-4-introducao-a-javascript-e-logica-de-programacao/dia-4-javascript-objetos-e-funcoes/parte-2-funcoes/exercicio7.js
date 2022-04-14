function customEndsWith(word, ending) {
    for (let i = ending.length - 1; i >= 0; i -= 1) {
        if (ending[i] !== word[(word.length - ending.length) + i]) {
            return false;
        }
    }
    return true;
}

let word = 'trybe';
let ending = 'be'

console.log(customEndsWith(word, ending))
console.log(word.endsWith(ending))