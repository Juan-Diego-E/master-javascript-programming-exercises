function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let c = 0
    
    if (obj.hasOwnProperty(key) && obj[key].length > 0) {
        for (let e of obj[key]) {
          c += e;
        }
      } 
    else return 0
    return c
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
