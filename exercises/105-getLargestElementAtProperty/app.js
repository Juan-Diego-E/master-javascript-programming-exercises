function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key]) || (obj[key].length === 0)) {
      return [];
    }
    
    let arr = obj[key];
    let l = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > l) {
        l = arr[i];
      }
    }
    return l;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
