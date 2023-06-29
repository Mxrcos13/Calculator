let displayValue = '';
let firstNum = 0;
let secondNum = 0;
let operator = '';
let test = true;
let test2 = true;
let decimalClicked = false;

const add =  (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

const operate = () => operator(firstNum,secondNum);

const getnum = (doc) => doc.textContent

const numButtons = document.querySelectorAll('.buttons');
const operatorButtons = document.querySelectorAll('.operator')

const screen = document.querySelector('.screen');

const handleNumClick = current => {
    clickedNum = current.target.value;
    if(test === false){
        displayValue = '';
    }
    if(displayValue === ''){
        displayValue = clickedNum;
    }else{
        displayValue = '' + displayValue + clickedNum;
    }
    if(operator){
        secondNum = parseFloat(displayValue);
    }else{
        firstNum = parseFloat(displayValue);
    }
    screen.textContent = `${displayValue}`;
};

const handleOperatorClick = current =>{
    test = true;
    test2 = true;
    const clickedOperator = current.target.value;
    switch(clickedOperator){
        case '+' :
            if(operator === ''){
                operator = add;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = add;
            }
            decimalClicked = false;
            break;
        case '-' :
            if(operator === ''){
                operator = subtract;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = subtract;
            }
            decimalClicked = false;
            break;
        case '/' :
            if(operator === ''){
                operator = divide;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = divide;
            }
            decimalClicked = false;
            break;
        case '*' : 
            if(operator === ''){
                operator = multiply;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = multiply
            }
            decimalClicked = false;
            break;
        case '=' :
             displayValue = operate();
             firstNum = displayValue;
             secondNum = 0;
             operator = '';
             test = false;
             decimalClicked = false;
             break;
        case 'C' :
            displayValue = '';
            secondNum = 0;
            decimalClicked = false;
        break;
        case 'CA' :
            firstNum = 0;
            secondNum = 0;
            operator = '';
            displayValue = '';
            decimalClicked = false;
            break;
        case '.' :
            if (!decimalClicked) {
                displayValue += '.';
                decimalClicked = true;
                test2 = false;
            }
            break;
    }
    screen.textContent = `${displayValue}`;
    if(test && test2){
        displayValue = '';
    }
}

numButtons.forEach((button) =>{
    button.addEventListener('click',handleNumClick);
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', handleOperatorClick);
})

