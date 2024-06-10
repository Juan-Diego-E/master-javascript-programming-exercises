function removeFromBackOfNew(arr) {
  // your code here
  let arr2 = arr.slice(0, -1)
  return arr2
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
