function addToFrontOfNew(arr, element) {
    // your code here
    let arr2 = arr.slice();
    arr2.unshift(element);
    return arr2;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
