function LongestWord(sen) {
  // code goes here
  let wordsArr = sen.match(/[a-zA-Z0-9]+/g);
  let longestWord = '';
  for (let word of wordsArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
