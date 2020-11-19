function palidromCheck(arr){
	let reversedArr = arr.split("").reverse().join("")
  let result = (reversedArr === arr) ? true: false;
  console.log(result)
}
palidromCheck("oco");
