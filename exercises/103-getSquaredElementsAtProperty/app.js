function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length < 1) {
      return []
    }
    
    return obj[key].map((i) => i * i);
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
