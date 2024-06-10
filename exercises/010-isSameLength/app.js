// Write your function here
function isSameLength(word1, word2){

    let l1 = 0;
    let l2 = 0;
    let w1 = String(word1).length;
    let w2 = String(word2).length;
  
    for(let i = 0; i < w1; i++){l1++;}
    for(let i = 0; i < w2; i++){l2++;}

    if(l1 == l2){return true;}
    else{return false;}
}

let output = isSameLength('words', 'super');
let output2 = isSameLength('words', 'superior');
let output3 = isSameLength('when', 'another');
console.log(output); // --> true
console.log(output2);
console.log(output3);