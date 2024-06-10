function countCharacter(str, char) {
    // your code here
    let c = 0;
    let txt = str.split('');

    for(let i = 0; i < txt.length; i++){
        if(txt[i] === char){
            c++;
        }
    }
    return c;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
