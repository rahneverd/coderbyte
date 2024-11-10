// First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
// Examples
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I

function FirstReverse(str) {
  // code goes here
  let strArr = str.split('');
  let reversedArr = strArr.reverse();
  let result = reversedArr.join('');
  return result;
}

// keep this function call here
console.log(FirstReverse(readline()));
