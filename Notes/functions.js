/*
! FUNCTIONS

Types of functions:
    - Declarations  
    - Expressions 
    - Anonymous

*/  

//Function Declaration: these are hoisted in our code and only run when we call them (invoked) 
function declaration() {
    console.log('I am a function declaration.');
}

declaration();

//Function Expression:
let expression = function () {
    console.log('I am a function expression.');
}

expression(); 
//have to invoke (call it) for it to run; stored in a variable and use that variable name to run it 
//NOT hoisted - invoked using the variable name 