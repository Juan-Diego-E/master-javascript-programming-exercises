function filterEvenElements(arr) {
    // your code here
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr2.push(arr[i])
        }
    }
    return arr2
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
