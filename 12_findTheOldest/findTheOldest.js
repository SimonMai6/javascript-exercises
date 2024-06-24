const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear().toString();
    let somePerson = people.reduce((a, b) => {
        if(isNaN(a.yearOfDeath)){
            a.yearOfDeath = currentYear;
        }
        else if(isNaN(b.yearOfDeath)){
            b.yearOfDeath = currentYear;
        }
        if(a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return a;
        }
        else{
            return b;
        } 
       
        
    });
    return somePerson;
};


// Do not edit below this line
module.exports = findTheOldest;
