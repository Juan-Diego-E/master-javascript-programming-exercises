function getLengthOfWord(word) {
  // your code here
  let l = 0;
  for(let i = 0; i < word.length; i++){
    l++;
  }
  return l;
}
let output = getLengthOfWord('');
console.log(output); // --> 4