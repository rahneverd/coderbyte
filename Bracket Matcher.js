function BracketMatcher(str) {
  // code goes here
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      stack.push(str[i]);
    } else if (str[i] == ')') {
      if (stack.length === 0) {
        return 0;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

// keep this function call here
console.log(BracketMatcher(readline()));
