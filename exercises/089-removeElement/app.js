// Write your function here
function removeElement(arr, e){
    return arr.filter((i) => i != e)
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]