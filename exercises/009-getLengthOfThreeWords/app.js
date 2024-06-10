function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  let l = 0;
  let sum = word1 + word2 + word3;
  let txt = String(sum).length;

  for(let i = 0; i < txt; i++){l++;}
  return l;
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
