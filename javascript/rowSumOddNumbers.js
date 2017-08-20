function rowSumOddNumbers(n) {
// ny nthOdd function we caculate the number of odd number we want to start with 
//for example  if n=3 we want to start from 4th odd number which is 7 or if n=4 7th odd number  which is 13
//we use recursion for this nthOdd(1)=1,  nthOdd(2)=nthOdd(1)2-1=1+1=2 => the second odd number ,  
	var nthOdd= function (n){

		if(n===1){
	  		return 1
	 	}

		if(n>1){
	  		return  nthOdd(n-1)+n-1
	 	}
	}
	// so we know the number of odd number , now we want to konw what is that odd number startingPoint=2*nthOdd(n)-1
	// 
	console.log("startingPoint",2*nthOdd(n)-1)
	var oddNumber =2*nthOdd(n)-1
	var result= oddNumber
	// we make loop to creat the odd number we want and then we add them with each other
	for (var i=1; i<n; i++){
		oddNumber+=2
		console.log("oddNumber"+i,oddNumber)
		result+=oddNumber;
		console.log("result"+i,result)
	}
    return result
}

