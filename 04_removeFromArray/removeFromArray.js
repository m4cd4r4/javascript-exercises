const removeFromArray = function(...args) {
    // pull out the first item in given arguments with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // return a new array which includes every item NOT in args[1:n]
    return array.filter(value => !args.includes(value));
}

// Do not edit below this line
module.exports = removeFromArray;
