# Qubic series
Your task is to construct a building which 
will be a pile of n cubes.
 The cube at the bottom will have a volume of 
n^3, the cube above will have volume 
 of (n-1)^3 and so on until the top which will 
have a volume of 1^3.

You are given the total volume m of the building.
 Being given m can you 
find the number n of cubes you will have
 to build?

The parameter of the 
function findNb (find_nb, find-nb, findNb) 
will be an integer
 m and you have to return the integer n such 
as n^3 + (n-1)^3 + ... + 1^3 = m 
 if such a n exists or -1 if there is no such n.es

Examples:

findNb(1071225) --> 45
findNb(91716553919377) --> -1


# isAlt()
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