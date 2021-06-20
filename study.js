keys.forEach(key => {

    key.addEventListener('click',(e) => {
        if((e.target.id <= 9 || e.target.id == '.') && count == 0){

            if(lengthCount < 15){

        firstNumber += e.target.id;
        display.textContent = firstNumber;

        lengthCount++;

        }

    }

    })

});

keys.forEach(key => {

    key.addEventListener('click',(e) => {
if((e.target.id == "/" && secondNumber == '' && firstNumber != '') || (e.target.id == "*" && secondNumber == '' && firstNumber != '') || (e.target.id == "+" && secondNumber == '' && firstNumber != '') || (e.target.id == "-" && secondNumber == '' && firstNumber != '')){

    operator = e.target.id;
    display.textContent = firstNumber;
    count = 1;
    lengthCount = 0;
}else  if((e.target.id == "/" && secondNumber != '' && firstNumber != '') || (e.target.id == "*" && secondNumber != '' && firstNumber != '') || (e.target.id == "+" && secondNumber != '' && firstNumber != '') || (e.target.id == "-" && secondNumber != '' && firstNumber != '')){

operator = e.target.id;
display.textContent = calculation(firstNumber,secondNumber);
firstNumber = calculation(firstNumber,secondNumber);
secondNumber = '';
count = 1;
lengthCount = 0;
}
})

});

keys.forEach(key => {

    key.addEventListener('click',(e) => {
        if((e.target.id <= 9 || e.target.id == '.') && count ==1 && firstNumber != ''){

            if(lengthCount < 15){

        secondNumber += e.target.id;
        display.textContent = secondNumber;
        lengthCount++

        }
}
});
});

    
keys.forEach(key => {
key.addEventListener('click', (e) => {

    if(e.target.id == '=' && count == 1 && firstNumber != '' && secondNumber != ''){

        display.textContent = calculation(firstNumber,secondNumber);
        firstNumber = calculation(firstNumber,secondNumber);
        secondNumber = '';
        count = 1;
        lengthCount = 0;
    }
});
});

// when clear button is pressed it clears all value and display the initial value.
//when delete button is pressed it delete the last enter charecter.
clearAndDelete.forEach(key => {
    key.addEventListener('click',(e) => {
        if(e.target.id == 'clear'){
            firstNumber = '';
            secondNumber = '';
            finalNumber = 0
            count = 0;
            display.textContent = '0';
            lengthCount = 0;
        }else if(e.target.id == 'delete'){
            if(count == 0){
                firstNumber = (firstNumber.toString()).slice(0,-1);
                display.textContent = firstNumber;
                lengthCount--;
            }else if(count == 1){
                secondNumber = secondNumber.slice(0,-1);
                display.textContent = secondNumber;
                lengthCount--
            }
        }
    })
});


// when i press the '=' button after the calculation it only shows the answer.


const calculation = function(a,b){
if(operator == "+"){
    finalNumber =Math.round((Number(a) + Number(b))*100000)/100000;
    display.textContent =Math.round(finalNumber*1000)/1000;

    count = 1;
    firstNumber = finalNumber;
    secondNumber = '';
    return finalNumber;

}else if(operator == "-" && count == 1){
    finalNumber =Math.round((Number(a) - Number(b))*100000)/100000;
    display.textContent =Math.round(finalNumber*1000)/1000;
    count = 1;
    firstNumber = finalNumber;
    secondNumber = '';
    return finalNumber;

}else if(operator == "/" && count == 1){
    finalNumber =Math.round((Number(a) / Number(b))*100000)/100000;
    display.textContent =Math.round(finalNumber*1000)/1000;
    count = 1;
    firstNumber = finalNumber;
    secondNumber = '';
    return finalNumber;

}else if(operator == "*" && count == 1){
    finalNumber =Math.round((Number(a) * Number(b))*100000)/100000;
    display.textContent =Math.round(finalNumber*1000)/1000;
    count = 1;
    firstNumber = finalNumber;
    secondNumber = '';
    return finalNumber;
}
}