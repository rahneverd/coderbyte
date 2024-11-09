function FirstFactorial(num) {
  // code goes here
  let result = 1;
  for (i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

// keep this function call here
console.log(FirstFactorial(readline()));
