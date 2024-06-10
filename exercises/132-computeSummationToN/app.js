function computeSummationToN(n) {
  // your code here
  sum = 0
  for(let i = 0; i <= n; i++) sum += i
  return sum
}

let output = computeSummationToN(6);
console.log(output); // --> 21

