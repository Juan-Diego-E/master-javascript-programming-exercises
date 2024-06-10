function findShortestElement(arr) {
    // your code here
    if (arr == '') return ''

    let str = 'aaaaaaaaaaaaaaa'
    for (let e of arr) {
        if (e.length < str.length) {
            str = e
        }
    }
    return str
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'