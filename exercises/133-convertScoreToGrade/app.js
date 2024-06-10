function convertScoreToGrade(s) {
    // your code here
    if (s < 0 || s > 100) return('INVALID SCORE')
    else {
        if (s >= 90 && s <= 100) return 'A';
        if (s >= 80 && s <= 89) return 'B';
        if (s >= 70 && s <= 79) return 'C';
        if (s >= 60 && s <= 69) return 'D';
        if (s >= 0 && s <= 59) return 'F';
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
