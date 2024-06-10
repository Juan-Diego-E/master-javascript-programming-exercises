function transformFirstAndLast(array) {
  // your code here
  let arr = { [array[0]]: array[array.length - 1] };

  return arr;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
