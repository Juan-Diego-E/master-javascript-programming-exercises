function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if ((typeof obj[key] != "undefined") && (Array.isArray(obj[key]) && obj[key].length>0))
      {
        var prod =1
        for (var elem in obj[key])
        {
          prod *= obj[key][elem]
        }
        return prod
      }
    else return 0
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
