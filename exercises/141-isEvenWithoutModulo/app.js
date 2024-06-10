function isEvenWithoutModulo(num) {
    // your code here
    let num2 = false;
    if (num >= 0) {
        for (let i = 0; i <= num + 1; i += 2) {
            if (i === num) num2 = true;
        }
    } else {
        for (let i = 0; i >= num - 1; i -= 2) {
            if (i === num) num2 = true;
        }
    }
    return num2;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
