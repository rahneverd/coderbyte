function QuestionsMarks(str) {
  // code goes here
  let result = false;
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      for (let j = i + 1; j < str.length; j++) {
        if (Number(str[j]) + Number(str[i]) === 10) {
          result = true;
          if (str.slice(i, j).split('?').length - 1 < 3) {
            return false;
          }
        }
      }
    }
  }
  return result;
}

// keep this function call here
console.log(QuestionsMarks(readline()));
