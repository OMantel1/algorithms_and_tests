function destroyer(arr) {
    let args = Array.from(arguments).slice(1) //2,3
    return arr.filter(x => !args.includes(x));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

module.exports = destroyer