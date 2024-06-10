function computePerimeterOfACircle(radius) {
  // your code here
  let pi = Math.PI;
  let diameter = radius*2
  return pi * diameter
}

let output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345
