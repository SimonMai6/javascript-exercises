const sumAll = function(firstNum, secondNum) {
    let sumOfNums = 0;
    if(firstNum < 0 || secondNum < 0 
        || typeof firstNum !== 'number'
        || typeof secondNum !== 'number'){
        return 'ERROR';
    }
    while(firstNum > secondNum){
        sumOfNums += secondNum;
        secondNum++;
    }

    while(firstNum <= secondNum){
        sumOfNums += firstNum;
        firstNum++;
    }
    return sumOfNums;

};

// Do not edit below this line
module.exports = sumAll;
