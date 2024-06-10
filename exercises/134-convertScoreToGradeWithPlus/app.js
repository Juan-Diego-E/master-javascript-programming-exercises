function convertScoreToGradeWithPlusAndMinus(s) {
    // your code here
    if (s < 0 || s > 100) return ('INVALID SCORE')
    else {
        if (s >= 90 && s <= 100) {
            if (s >= 90 && s <= 92) return 'A-';
            if (s >= 98 && s <= 100) return 'A+';
            return 'A';
        }
        if (s >= 80 && s <= 89) {
            if (s >= 80 && s <= 82) return 'B-';
            if (s >= 88 && s <= 89) return 'B+';
            return 'B';
        }
        if (s >= 70 && s <= 79) {
            if (s >= 70 && s <= 72) return 'C-';
            if (s >= 78 && s <= 79) return 'C+';
            return 'C';
        }
        if (s >= 60 && s <= 69) {
            if (s >= 60 && s <= 62) return 'D-';
            if (s >= 68 && s <= 69) return 'D+';
            return 'D';
        }
        if (s >= 0 && s <= 59) return 'F';
    }
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
