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


    keys.forEach(key => {

        key.addEventListener('click',(e) => {
            if(e.target.id <= 9 && count == 0){

            firstNumber += e.target.id;
            display.textContent = firstNumber;

        }else if(e.target.id == "/" || e.target.id == "*" || e.target.id == "+" || e.target.id == "-"){

                    operator = e.target.id;
                    display.textContent = firstNumber;
                    count = 1;
            }

        })

    });
    keys.forEach(key => {

        key.addEventListener('click',(e) => {
            if(e.target.id <= 9 && count ==1){

            secondNumber += e.target.id;
            display.textContent = secondNumber;
        }else if(e.target.id == "/" || e.target.id == "*" || e.target.id == "+" || e.target.id == "-"){

            operator = e.target.id;
            display.textContent = firstNumber;
            count = 1;
        }else if(e.target.id == "=" && operator == "+" && count == 1){
            finalNumber = Number(firstNumber) + Number(secondNumber);
            display.textContent = finalNumber;
            firstNumber = finalNumber;
            count = 0;
            secondNumber = '';
        }else if(e.target.id == "=" && operator == "-" && count == 1){
            finalNumber = Number(firstNumber) - Number(secondNumber);
            display.textContent = finalNumber;
            firstNumber = finalNumber;
            count = 0;
            secondNumber = '';
        }else if(e.target.id == "=" && operator == "/" && count == 1){
            finalNumber = Number(firstNumber) / Number(secondNumber);
            display.textContent = finalNumber;
            firstNumber = finalNumber;
            count = 0;
            secondNumber = '';
        }else if(e.target.id == "=" && operator == "*" && count == 1){
            finalNumber = Number(firstNumber) * Number(secondNumber);
            display.textContent = finalNumber;
            firstNumber = finalNumber;
            count = 0;
            secondNumber = '';
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
                count = 0;
                display.textContent = '0';
            }else if(e.target.id == 'delete'){
                if(count == 0){
                    firstNumber = firstNumber.slice(0,-1);
                    display.textContent = firstNumber;
                }else if(count == 1){
                    secondNumber = secondNumber.slice(0,-1);
                    display.textContent = secondNumber;
                }
            }
        })
    });

    // when i press the '=' button after the calculation it only shows the answer.
    keys.forEach(key => {
            key.addEventListener('click', (e) => {
                if(e.target.id == '=' && count == 0 && secondNumber == ''){

                        display.textContent = firstNumber;
                        count = 0;
                }
            })
    });


