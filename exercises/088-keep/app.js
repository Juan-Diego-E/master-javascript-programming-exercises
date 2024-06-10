// Write your function here
function keep(arr, e){
    return arr.filter((i) => i == e)
}

let output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]