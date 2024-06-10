// Write your function here
function getNthElementOfProperty(obj, key, n){

    if(!obj[key] || !Array.isArray(obj[key]) || n >= obj[key].length) {
        return undefined
    }
    return obj[key][n];

}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2