function getElementsAfter(array, n) {
  // your code here
  newArray = array.slice(n + 1)
  return newArray
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
