function uniteUnique(arr) {
    let result = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            if (!result.includes(arguments[i][j])) {
                result.push(arguments[i][j])

            }
        }
    }

    return result
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Freecodecamp solution
function uniteUnique(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            if (!result.includes(args[i][j])) {
                result.push(args[i][j]);
            }
        }
    }
    return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));