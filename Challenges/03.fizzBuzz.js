/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB = 5; 

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('fizz buzz'); 
} else if (FB % 5 === 0) {
    console.log('buzz'); 
} else if (FB % 3 === 0) {
    console.log('fizz');
}

let fb = 15; 

// fb % 5 == 0 && fb % 3 == 0 ? console.log('fizz buzz') : 
// fb % 3 == 0 ? console.log('fizz') : 
// fb % 5 == 0 ? console.log('buzz') : 
// console.log(fb);

switch(true) {
    case (fb % 3 === 0 && fb % 5 === 0) :
        // % = modulus 
        console.log('fizz buzz');
        break; //checks this first - if not the case, it will break out of it and check the next and so on 
    case (fb % 5 === 0) :
        console.log('buzz'); 
        break; 
    case(fb % 3 === 0) :
        console.log('fizz'); 
        break; 
}