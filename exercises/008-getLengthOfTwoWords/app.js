function getLengthOfTwoWords(word1, word2) {
  // your code here
  let l = 0;
  for(let i = 0; i < word1.length + word2.length; i++){
    l++;
  }
  return l;
}
let output = getLengthOfTwoWords('some', 'words');
console.log(output);
