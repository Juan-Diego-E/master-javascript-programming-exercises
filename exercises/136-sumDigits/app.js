function sumDigits(num) {
    // your code here
    let txt = num.toString()
    let total = 0

    for (let i = 0; i < txt.length; i++) {
        if (i === 0 && txt[i] === "-") {
            total -= Number(txt[i + 1]);
            i++;
        } else {
            total += Number(txt[i]);
        }
    }
    return total
}

let output = sumDigits(-316);
console.log(output); // --> 4
