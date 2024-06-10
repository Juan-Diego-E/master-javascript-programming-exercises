function joinArrayOfArrays(arr) {
  // your code here
  let arr2 = []
  
  for (let e of arr) {
    arr2 = arr2.concat(e)
  }
  
  return arr2;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
