function FindIntersection(strArr) {
  // code goes here
  let str1Arr = strArr[0].split(', ');
  let str2Arr = strArr[1].split(', ');

  let matchMap = {};
  let resultArr = [];

  str1Arr.forEach((num) => (matchMap[num] = true));
  str2Arr.forEach((num) => {
    if (matchMap[num]) {
      resultArr.push(num);
    }
  });

  if (resultArr.length > 0) {
    return resultArr.join(',');
  }

  return false;
}

// keep this function call here
console.log(FindIntersection(readline()));
