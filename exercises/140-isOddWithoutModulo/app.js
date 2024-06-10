function isOddWithoutModulo(num) {
    // your code here
    let num2 = true;
    if (num >= 0) {
        for (let i = 0; i <= num + 1; i += 2) {
            if (i === num) num2 = false;
        }
    } else {
        for (let i = 0; i >= num - 1; i -= 2) {
            if (i === num) num2 = false;
        }
    }
    return num2;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
