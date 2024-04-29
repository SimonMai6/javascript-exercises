const reverseString = function(words) {
    reverse = '';
    for(let i = words.length; 0 <= i; i--){
        reverse += words.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
