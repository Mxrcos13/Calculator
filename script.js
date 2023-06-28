let displayValue;
let firstNum = 0;
let secondNum = 0;
let operator = '';

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
    displayValue = parseInt(current.target.value);
    screen.textContent = `${displayValue}`;
    if(firstNum === 0){
        firstNum = displayValue;
    }else{
        secondNum = displayValue;
    }
};

const handleOperatorClick = current =>{
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
            break;
        case '-' :
            if(operator === ''){
                operator = subtract;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = subtract;
            }
            break;
        case '/' :
            if(operator === ''){
                operator = divide;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = divide;
            }
            break;
        case '*' : 
            if(operator === ''){
                operator = multiply;
            }else{
                displayValue = operate();
                firstNum = displayValue;
                operator = multiply
            }
            break;
        case '=' :
             displayValue = operate();
             firstNum = 0;
             secondNum = 0;
             operator = '';
             break;
        case 'CA' :
            firstNum = 0;
            secondNum = 0;
            operator = '';
            displayValue = '';
            break;
    }
    screen.textContent = `${displayValue}`;
}

numButtons.forEach((button) =>{
    button.addEventListener('click',handleNumClick);
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', handleOperatorClick);
})

