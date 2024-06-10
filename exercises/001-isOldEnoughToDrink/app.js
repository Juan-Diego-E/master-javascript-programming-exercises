function isOldEnoughToDrink(age) {
    // your code here
    if(age >= 21){
        return true;
        console.log('is old enough');
    }
    else if(age <= 19){
        return false;
        console.log('is not old enough');
    }
}

console.log(22);