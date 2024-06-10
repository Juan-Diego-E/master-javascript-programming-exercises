function getStringLength(string) {
    // your code here
    let c = 0;
    for (let l of string) {
        c++;
    }
    return c;
}

let output = getStringLength('hello');
console.log(output); // --> 5
