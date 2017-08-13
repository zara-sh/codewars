var foo = function (m){
	
	var i=1
	var sum=0

	while(sum<=m){
		sum+=i*i*i
	 	
		console.log("sum",sum)
		console.log("i",i)

		if(sum===m){
			return i
		}

		i++	
	}

	return -1
}
