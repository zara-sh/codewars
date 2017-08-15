
function isAlt(word) {
  // happy codinggg
  var arr=word.split("");
  var vowel=["a","e","i","o","u"];
  // console.log("arr",arr)
  var type;
  if(arr.length===1){
    return true
  }
  if(vowel.indexOf(arr[0]) > -1){
    type = "even";
  }
  else{
    type = "odd";
  }
  for(var i=0; i < arr.length; i++){
// console.log("arr[i]",arr[i])
// console.log("i",i)
// console.log("type",type)
// console.log("vowel.indexOf(arr[i])",vowel.indexOf(arr[i]))

     if( type==="even" && i%2 === 0 && vowel.indexOf(arr[i]) === -1){
// console.log("even case doesnt have vowel in even i",i,arr[i])
     return false
     }
    if( type==="even" && i%2 != 0 && vowel.indexOf(arr[i]) > -1){
// console.log("even case has vowel in odd i",i,arr[i])
     return false
     }
     if( type==="odd" && i%2 === 0 && vowel.indexOf(arr[i]) > -1){
// console.log("odd case has vowel in even i",i,arr[i])
     return false
     }
     if( type==="odd" && i%2 != 0 && vowel.indexOf(arr[i]) === -1){
// console.log("odd case dosent have vowel in odd i",i,arr[i])
     return false
     }

  }
  return true
}
/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

"other solution""

function isAlt(word) {
  let vowels = 'aeiouAEIOU';
  let current = true;
  for (let i = 1 ; i <= word.length -1 ; i++) {
    if (vowels.indexOf(word[i]) !== -1 && vowels.indexOf(word[i-1]) !== -1 || 
      vowels.indexOf(word[i]) === -1 && vowels.indexOf(word[i-1]) === -1) {
      current = false;
    }
  }
  return current
}