function sumDigPow(a,b) {

	// var result;
	var sumResult=[];

	for(var num=a; num<=b; num++){
		var i=1;
		var j=0;
		var sum=0; 
		var counter=0
		var reminder;
		var result=num;  
		var array = [];
		// console.log("current num",num)
// first we break the number to its digit( first digit, second digit, third digit ...)
//by dividing the number to 10^i and caculate the reminder
//
		while(result != 0){
			// console.log("result1",result)

			reminder = result%(10*i)
// we put all the digits of a number in to an array	
// we divided the reminder to 10 100 1000 ... to have the first digit ,second digit, ...			
			array.push(reminder/Math.pow(10, j))
			i*=10
			j++
			result-=reminder
			counter++
			// console.log("result1",result)
			// console.log("reminder",reminder)
			// console.log("array",array)  
		} 
// in this loop we do sth like this => 89 = 8^1 + 9^2	
		for(var i=0;i<array.length;i++){
			sum+=Math.pow(array[i],array.length-i)
		}
		// console.log("sum",sum)
// if we reach the original number then push it to sumResult array		 
		if(sum===num){
			sumResult.push(num)
			// console.log("num",num,"sum",sum)
			// console.log(sumResult)
		}
		
	}
	return sumResult
}

