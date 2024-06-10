function getLengthOfLongestElement(arr) {
    // Your code here
    let w = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > w) {
            w = arr[i].length;
        }
    }
    return w;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
