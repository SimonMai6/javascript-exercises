const fibonacci = function(num) {
    if(num >= 0 ){
        const fibonacciSequence = [0,1];
        for(let i = 0; num-1 > i; i++){
            fibonacciSequence.push(fibonacciSequence[i] + fibonacciSequence[i+1]);  
        }
        return fibonacciSequence[num];
    }
    else{
        return "OOPS";
    }
    
};
// Do not edit below this line
module.exports = fibonacci;
