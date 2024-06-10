function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let lNum = 0

    for(let e of arr){
        if(typeof e === 'number' && e > lNum){
            lNum = e
        }
    }
    return lNum
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
