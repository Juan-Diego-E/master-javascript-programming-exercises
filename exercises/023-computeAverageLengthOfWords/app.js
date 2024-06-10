// Write your function here
function computeAverageLengthOfWords(word1, word2) {
    let sum = word1.length + word2.length
    let avg = sum / 2;

    return avg;
}
let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6