function getLongestWordOfMixedElements(arr) {
    // your code here
    let lWord = ''

    for(let e of arr){
        if(typeof e === 'string' && e > lWord){
            lWord = e
        }
    }
    return lWord
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
