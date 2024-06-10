function findSmallestElement(arr) {
    // your code here
    if(arr.length < 1) return 0
    
    e = 99**9
    for(let n of arr){
        if(n < e){
            e = n
        }
    }
    return e
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1