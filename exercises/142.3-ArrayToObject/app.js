function transformEmployeeData(array) {
  // your code here
  let result = [];

  for (let e of array) {
    let obj = {};
    for (let i of e) {
      obj[i[0]] = i[1];
    }
    result.push(obj);
  }
  return result;
}
let output = transformEmployeeData(
  [[
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 42],
    ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkins'],
    ['age', 36],
    ['role', 'manager']
  ]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]