function palindromeCheck(arr){
	let reversedArr = arr.split("").reverse().join("")
  let result = (reversedArr === arr) ? true: false;
  return result
}
// console.log(palindromeCheck("oco"));

module.exports = palindromeCheck