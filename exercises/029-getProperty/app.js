function getProperty(obj, key) {
  // your code here
  return obj[key] ?? undefined;
}
let car = {
  model: 'Toyota'
};
let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'