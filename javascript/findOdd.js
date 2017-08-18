

function findOdd(A) {

  var obj={};
  var result;
  for (var i=0; i< A.length; i++ ){
    if(obj[A[i]]){
      obj[A[i]]+=1
    }

    else{
      obj[A[i]]=1
    }
  }

  console.log("obj",obj)

  for(var key in obj){



    if(obj[key]%2 != 0){
       result = key
    }
  }

  console.log("result",result)

  return result;
  
}

