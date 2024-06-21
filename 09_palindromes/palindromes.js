const palindromes = function (palindrome) {
    const arr = palindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "").split("");
    let notReversed = arr.join("").toLowerCase();
    let reverse = arr.reverse().join("").toLowerCase();
    return notReversed.includes(reverse);
};


// Do not edit below this line
module.exports = palindromes;
