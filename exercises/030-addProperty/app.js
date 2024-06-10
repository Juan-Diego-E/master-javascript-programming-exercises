function addProperty(obj, key) {
  // your code here
  let o = obj[key] = true;
  return obj
}
let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true