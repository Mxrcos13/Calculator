const add =  (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

const operate = (a,b,func) => func(a,b);

const getnum = (doc) => doc.textContent

let displayValue;
let firstNum;
let secondNum;
let operator;

const buttons = document.querySelectorAll('.buttons');
const screen = document.querySelector('.screen');

const handleClick = current => {
    displayValue = current.target.value;
    screen.textContent = `${displayValue}`;
    console.log(displayValue);
};

buttons.forEach((button) =>{
    button.addEventListener('click',handleClick)
});