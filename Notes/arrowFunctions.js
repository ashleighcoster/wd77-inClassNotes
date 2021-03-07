/*
*****************
! ARROW FUNCTIONS
*****************

- aka Fat Arrow Functions 
- NOT declarations
- do NOT get hoisted

Two Types:
1. Concise Body - return is automatic
2. Block Body - return is NOT automatic 

*/

//!CONCISE BODY = implied return 
//                 = > 
let speak = (name) => console.log(`The ${name} goes woof!`); // everything after = is a function 
speak('dog'); //dog = argument; putting that as value of the 'name' 

//! w/return 
let firstName = 'Jerome'; 
let LastName = 'Flaherty';

let concatName = (first, last) => `${firstName} ${LastName}`; 
console.log(concatName(firstName, LastName));

//!BLOCK BODY   
let speakAgain = name => {   //only have one parameter? can use the () or not - not needed
    console.log(`The ${name}`);
    console.log('goes woof');
} 

speakAgain('dog'); //dog = name; takes whatever value we put into and runs that value through the function in those places 
speakAgain('fredrick');

let concat = (first, last) => {
    return `${first} ${last}`;
}; 

let fullName = concat('jerome', 'flaherty');
console.log(fullName);

let x = 9; 
let y = 10; 

let answer = (num1 , num2) => {
    let sum = num1 + num2; 
    return sum; 
};

console.log(answer(x, y));