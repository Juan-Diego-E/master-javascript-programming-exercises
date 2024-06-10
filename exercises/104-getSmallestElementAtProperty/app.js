function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!Array.isArray(obj[key]) || (obj[key].length === 0)) {
      return [];
    }
    
    let arr = obj[key];
    let s = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < s) {
        s = arr[i];
      }
    }
    return s;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
