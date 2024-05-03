const removeFromArray = function(array, ...args) {
    newArray = [];
    
    // for(let i = 1; i < arguments.length; i++){
    //     while(array.includes(arguments[i])){
    //         array.splice(array.indexOf(arguments[i]),1);
    //     }
        
    // }
    for(const element of array){
        if(!args.includes(element)){
            newArray.push(element);
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
