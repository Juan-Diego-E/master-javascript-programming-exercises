// Write your function here
function computeAverageOfNumbers(n){
    if(n.length == 0) {return 0};

    let sum = 0;

    for(let i = 0; i < n.length; i++){
        sum+=n[i]
    }
    let avg = sum / n.length
    return avg
}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3