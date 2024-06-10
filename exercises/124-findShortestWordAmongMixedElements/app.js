function findShortestWordAmongMixedElements(arr) {
    // your code here
    let sWord = '';
    let sLength = Infinity;
  
    for (let e of arr) {
      if (typeof e === 'string' && e.length < sLength) {
        sWord = e;
        sLength = e.length;
      }
    }
    return sWord;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
