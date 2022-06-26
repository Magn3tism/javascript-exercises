const removeFromArray = function (...args) {
    // let i = arr.indexOf(n)
    // arr.splice(i, 1);
    // return arr;
    let arr = args[0];
    for (let i = 1; i < args.length; i++) {
        let j = arr.indexOf(args[i]);
        if (j !== -1) {
            arr.splice(j, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
