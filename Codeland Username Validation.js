function CodelandUsernameValidation(str) {
  // code goes here
  v_reg = /^[a-zA-Z][a-zA-z0-9_]{2,23}[a-zA-Z0-9]$/;
  return v_reg.test(str);
}

// keep this function call here
console.log(CodelandUsernameValidation(readline()));
