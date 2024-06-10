function findShortestOfThreeWords(w1, w2, w3) {
    // your code here
    if (w1.length <= w2.length && w1.length <= w3.length) 
        { return w1; }
    else if (w2.length <= w1.length && w2.length <= w3.length) 
        { return w2; }
    else if (w3.length <= w1.length && w3.length <= w2.length) 
        { return w3; }
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
