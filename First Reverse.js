function FirstReverse(str) {
  // code goes here
  let strArr = str.split('');
  let reversedArr = strArr.reverse();
  let result = reversedArr.join('');
  return result;
}

// keep this function call here
console.log(FirstReverse(readline()));
