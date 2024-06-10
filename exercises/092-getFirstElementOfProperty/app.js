// Write your function here
function getFirstElementOfProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key])) {
        return undefined
    }

    return obj[key][0]
}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1