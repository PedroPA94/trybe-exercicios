function checkPalindrome(word) {
    let reversedWord = word.split('').reverse().join('');
    
    if (reversedWord === word) {
        return true;
    } else {
        return false;
    };
};

console.log(checkPalindrome("ovo"));