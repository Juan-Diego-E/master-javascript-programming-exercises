function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let sNum = Infinity;

  for (let e of arr) {
    if (typeof e === 'number' && e < sNum) {
      sNum = e;
    }
  }
  if (sNum === Infinity) {
    return 0;
  } else {
    return sNum;
  }
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
