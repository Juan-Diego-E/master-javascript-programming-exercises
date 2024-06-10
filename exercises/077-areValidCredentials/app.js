// Write your function here
function areValidCredentials(n, p){
    if(n.length >= 3 && p.length >= 8){
        return true
    }
    
    else return false
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true