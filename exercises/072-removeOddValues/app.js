function removeOddValues(obj) {
    // your code here
    for(let e in obj){
      if(obj[e] % 2 != 0){
        delete obj[e];
      }
    }
    return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
