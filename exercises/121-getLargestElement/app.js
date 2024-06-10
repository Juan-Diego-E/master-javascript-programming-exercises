function getLargestElement(arr) {
  // your code here
  if(arr == '') return 0

  let n = arr[0]
  for (let e of arr) {
      if (e > n) {
          n = e
      }
  }
  return n
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;