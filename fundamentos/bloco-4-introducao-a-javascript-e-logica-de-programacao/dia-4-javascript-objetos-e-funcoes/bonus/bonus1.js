function romanToArabic(romanNumeral) {
    const conversionTable = { 
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let arabicNumeral = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i -= 1) {
        let conversion = conversionTable[romanNumeral[i]];
        if (conversion < conversionTable[romanNumeral[i + 1]]) {
            arabicNumeral -= conversion;
        } else {
            arabicNumeral += conversion;
        }
    }
    
    return arabicNumeral;
}

const roman = 'MCDLXXIX';

console.log(romanToArabic(roman));