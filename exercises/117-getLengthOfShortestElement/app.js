function getLengthOfShortestElement(arr) {
    // your code here
    if (arr.length < 1) return 0

    let l = arr[0].length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < l) {
            l = arr[i]
        }
    }
    return l
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
