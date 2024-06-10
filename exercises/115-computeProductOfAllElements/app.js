function computeProductOfAllElements(arr) {
  // your code here
  let p = 1
  if(arr.length < p) return 0
  for(let n of arr){
    p *= n
  }
  return p
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
