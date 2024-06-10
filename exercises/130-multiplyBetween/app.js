function multiplyBetween(num1, num2) {
    // your code here
    midNumbers = [];
    let result = 1;

    if(num1 > num2)return 0

    while(num1 < num2){
        midNumbers.push(num1)
        num1 ++;
    }
    
    for(let e of midNumbers){
        result *= e
    }
    return result
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
