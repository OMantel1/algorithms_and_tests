let m = 5;
let n = 7;

let arr1 = [1, 4,9, 11, 3, 7];
let arr2 = [1, 6, 9, 12, 26, 78, 94];
let max = Math.max(...arr1);
let filter =  (arr2.filter(x => x === max));
result = (filter== max)? 1 : 0;


console.log(result);
console.log(max);