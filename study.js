const display = document.querySelector('#display');
const keys = document.querySelectorAll('.keySection');
const clearAndDelete = document.querySelectorAll('.clearAndDelete');
//
let firstNumber = '';
let secondNumber = '';
let finalNumber = 0;
let operator = '';
let count =0;
let lengthCount =0;
let bigNo = 999999999999999;


// asking for first number
keys.forEach(key => {
    key.addEventListener('click',(e) => {

        if((e.target.id <=9 || e.target.id == '.') && count == '0'){ // if number is presed and count is 0 call firstFunction
        
            firstFunction(e.target.id);
        }else if((e.target.id == "/") || (e.target.id == "*") || (e.target.id == "+") || (e.target.id == "-")){ //if operator is pressed and count is anything call operatorFunction.
            operatorFunction(e.target.id);
        }
    })
});


const firstFunction = (userInput) => { //put userInput it firstNumber
    if (lengthCount <= 15){
    firstNumber += userInput;
    display.textContent = firstNumber;
    lengthCount++;
}
}

const operatorFunction = (userInput) => {//put userInput and put it in operator and put count to 1;
    
    if(firstNumber != '' && secondNumber == ''){
    operator = userInput;
    display.textContent = firstNumber;
    count = 1;
    lengthCount = 0;

    }else if(firstNumber != '' && secondNumber != ''){
        checkFunction(firstNumber,secondNumber);
        operator = userInput;
        lengthCount = 0;

    }
}

keys.forEach(key => {
    key.addEventListener('click',(e) => {

        if((e.target.id <=9 || e.target.id == '.') && count == '1'){//if number is pressed and count is 1 call secondFunction.
            secondFunction(e.target.id);
        }
    })
});

const secondFunction = (userInput) => {//when number is pressed it stores in second number. Here count is 1
    if(lengthCount <= 15){
    secondNumber += userInput;
    display.textContent = secondNumber;
    lengthCount++;
    }
}

keys.forEach(key => {
    key.addEventListener('click', (e) => {

        if (e.target.id == '='){ //when '=' pressed check the firstNumber and secondNumber and call checkFunction.
            checkFunction(firstNumber,secondNumber);
            operator ='';
            count = 0;
        }
    })
});

const checkFunction = (a,b) => {//when firstNumber and secondNumber passed it checks for number is empty or not.

    if(a == ''){// if a=firstNumber is empty. put finalNumber = 0. it dont care about the operator is empty or not.
        finalNumber = 0;
        display.textContent = finalNumber;
    }else if(a != '' && b == '')//if a=firstNumber is non empty and b=secondNumber is empty. put final Number = a;
    {
        finalNumber = a;
        display.textContent = finalNumber;
    }else if(a != '' && b != '' && operator != ''){//ig both a and b are non empty then call calculationFunction
        
        calculationFunction(a,b);
    }
}

const calculationFunction = (valueA,valueB) => {//when both firstNumber is non empty and operator is present it do the calculation.

    if(operator == '+'){
        finalNumber = Number(valueA) + Number(valueB);
        display.textContent = finalNumber;
        firstNumber = finalNumber;
        secondNumber ='';

    }else if(operator == '-'){
        finalNumber = Number(valueA) - Number(valueB);
        display.textContent = finalNumber;
        firstNumber = finalNumber;
        secondNumber ='';

    }else if(operator == '*'){
        finalNumber = Number(valueA) * Number(valueB);
        display.textContent = finalNumber;
        firstNumber = finalNumber;
        secondNumber ='';

    }else if(operator == '/'){
        finalNumber = Number(valueA) / Number(valueB);
        display.textContent = finalNumber;
        firstNumber = finalNumber;
        secondNumber ='';
    }

}

    // when clear button is pressed it clears all value and display the initial value.
    //when delete button is pressed it delete the last enter charecter.
    clearAndDelete.forEach(key => {
        key.addEventListener('click',(e) => {
            if(e.target.id == 'clear'){
                firstNumber = '';
                secondNumber = '';
                count = 0;
                display.textContent = 0;
                lengthCount = 0;
            }else if(e.target.id == 'delete'){
                if(count == 0){
                    firstNumber = firstNumber.slice(0,-1);
                    display.textContent = firstNumber;
                    if(lengthCount>0){
                        lengthCount--;
                    }
                }else if(count == 1){
                    secondNumber = secondNumber.slice(0,-1);
                    display.textContent = secondNumber;
                    if(lengthCount>0){
                        lengthCount--;
                    }
                }
            }
        })
    });