function squareElements(arr) {
  // your code here
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let s = arr[i] * arr[i]
    newArr.push(s)
  }
  return newArr;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
