function mathMax(x){
	x.sort((a,b) => {return a-b})
	console.log(x[x.length -1])
}

mathMax([1,9,-1000, -100, 8,4,6,20,97,6000,1981,2,4,4,8,1000])