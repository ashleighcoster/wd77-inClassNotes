
//functions - storing code that runs 

function firstExample() {
    console.log('Example Function');
}

//must have to call or invoke it to work/run the code 

firstExample(); //() tells js it is a function 

let myName = 'Jerome'; 


//                  NAME (anything in paranthesis) of the function - what we use when calling it 
function printName(yourName){
    console.log(yourName);
}

printName(myName); 
//will be 'undefined' if we don't put something/variable in it 

printName('Ashleigh');
printName('Eric', 'Ashleigh');
//will only print ONE variable - the first one 

function checkNameLength(potato, tomato){
    // if(potato.length > tomato.length){
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }
    console.log(potato.length > tomato.length);
}

checkNameLength('two that', 'have different lengths');

//any conditional we write, it will automatically be a boolean and go to true or false 

console.log('jerome' == 'ashleigh');
console.log(2 + 2 == 4);

//function that takes in two numbers and logs if first number is multiple of second number 

function anyNumber(firstNum, secondNum){
    // if(firstNum % secondNum === 0){
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }
    console.log(firstNum % secondNum == 0); // can also write it like this 
}

anyNumber(10,25);
anyNumber(10,20);

let city = ''; 

//return lets it be sent outside of the scope of the function 

function returnCity() {

}

//return keyword 

//                  2       5 
function calculator(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2; 
}

let answer = calculator(2,5); 
//can use 'calculator' and it will console log now that it is a function without having to console log it 

console.log(calculator(answer, 3));
console.log(calculator(2, 5));
//when we 'return' it does whatever equation we give it 

console.log(calculator(8, calculator(5,12)));

//return is the last thing a function does so can't add anything below it within the function 
