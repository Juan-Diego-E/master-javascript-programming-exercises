function findPairForSum(array, number) {
  // your code here
  let n = array[1]
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] + n === number) {
      result.push(n, array[i])
      return result
    }
    else {
      n = array[i++]
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
