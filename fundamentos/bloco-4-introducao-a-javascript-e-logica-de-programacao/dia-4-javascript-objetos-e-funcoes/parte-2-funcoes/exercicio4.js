function longestName(array) {
    let wordSize = array[0].length;
    let longestWord = array[0];

    for (let name of array) {
        if (name.length > wordSize) {
            wordSize = name.length;
            longestWord = name;
        }
    }
    return longestWord;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(longestName(array))