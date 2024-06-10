// Write your function here
function select(arr, obj) {
    let newObject = {};
    for (var key in obj) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                newObject[key] = obj[key];
            }
        }
    }
    return newObject;
}

let arr = ['a', 'c', 'e'];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }