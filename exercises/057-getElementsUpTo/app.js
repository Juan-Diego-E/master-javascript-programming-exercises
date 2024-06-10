function getElementsUpTo(array, n) {
  // your code here
  r = array.slice(0, n)
  return r
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
