//node NodeCalc.js

var readlineSync = require('readline-sync');
var firstNumber = readlineSync.questionInt("Please enter your first number: ");
var secondNumber = readlineSync.questionInt("Please enter your second number: " );
var enteredOperator = readlineSync.question("Please enter the operation to perform : add, sub, mul, div ");

function addTwoNumbers(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function subtractTwoNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function multiplyTwoNumbers(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function divideTwoNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function myCalculator(firstNumber, secondNumber, enteredOperator){
    if (enteredOperator == "add"){
        console.log("Addition of Number 1: " +  firstNumber + " with Number 2: " + "The result is: " + addTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "sub"){
        console.log("Subtraction of Number 1: " +  firstNumber + " with Number 2: " + "The result is: " + subtractTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "mul"){
        console.log("Multiply of Number 1: " +  firstNumber + " with Number 2: " + "The result is: " + multiplyTwoNumbers(firstNumber, secondNumber));
    }
    else if(enteredOperator == "div"){
        console.log("Division of Number 1: " +  firstNumber + " with Number 2: " + "The result is: " + divideTwoNumbers(firstNumber, secondNumber));
    }
    else {
        console.log("Operation is not recognized. Please try again. ")
    }
}

myCalculator(firstNumber, secondNumber, enteredOperator);