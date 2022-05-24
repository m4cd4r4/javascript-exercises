
const repeatString = function(string, number) {
    newString = "";
    
    if (typeof number ==='number' && number >=0) {
        for(let i = 0; i < number; i++){
            newString += string;
        } 
        return newString;
    };
    
    return "ERROR";
    
    }

    
// Do not edit below this line
module.exports = repeatString;
