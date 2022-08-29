let numbers = [10, 200, 5, 99, 700,];
let high = 0;
let greatest = numbers.reduce((prev, current)=>{
	
	if(current > high){
		high = current;
// 		console.log("highest", high);
	}
	return high;
}, 0)

console.log(greatest)


