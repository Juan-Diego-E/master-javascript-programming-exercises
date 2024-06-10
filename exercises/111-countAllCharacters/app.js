// Write your function here
function countAllCharacters(str){
    if(str.length == 0) return {}

    let o = {}

    for(let i = 0; i < str.length; i++) {
        if(o[str[i]]) {
            o[str[i]] = o[str[i]] + 1 
        } else {
            o[str[i]] = 1
        }
    }
    return o
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}