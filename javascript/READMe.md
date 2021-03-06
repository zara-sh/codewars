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


# FindOdd

//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.
function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

# RowSumOddNumbers

*Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

# sumDigPow
The number 89 is the first integer with more than one digit that fulfills the property
 partially introduced in the title of this kata. What's the use of saying "Eureka"? Because 
 this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines 
the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills 
the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
