
// How to Create a function 

// Syntax
// Function Defination
function addNumbers(num1,num2){
 var result=num1+num2;
 return result  
}

function SubtractNumber(num1,num2){
    var result = num1-num2;
    return result
}

var number1 =567
var number2 =  786
var resultGivenByAddNumbrers = addNumbers(number1,number2); // function Call
var resultGivenBySubtractNumbers = SubtractNumber(number1,number2); // function Call

console.log(resultGivenBySubtractNumbers,"result for subtraction")
console.log(resultGivenByAddNumbrers,"result")