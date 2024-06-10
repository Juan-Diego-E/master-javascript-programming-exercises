function getLongestElement(arr) {
    // your code here
    let l = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == l.length) {
            l = l
        }
        else if(arr[i].length > l.length){
            l = arr[i]
        }
    }
    return l;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
