function containsEnglish(str) {

    const lowerStr = str.toLowerCase();
    const target = "english";
    let found = false;
    
    for (let i = 0; i <= lowerStr.length - target.length; i++) {
        const substring = lowerStr.substring(i, i + target.length);
        if (substring === target) {
            found = true;
            break;
        }
    }
    return found;
}

console.log(containsEnglish("EnGlIsHaBlE"));  // true?
console.log(containsEnglish("eLbAhSiLgNe"));  // false?