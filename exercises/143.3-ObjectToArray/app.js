function convertObjectToList(obj) {
  // your code here
  let arr = []
  for(let e in obj){
    arr.push([e, obj[e]])
  }
  return arr
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
