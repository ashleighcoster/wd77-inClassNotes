/*

What does hoisting mean and what does it do? Think of it like opening a book with multiple chapters. One of the first pages in the book might be an index of table of contents with a list of the various chapters you might find. We can look at this page to get an idea of what info we can expect to find in the book later. 

Hoisting does this in a similar way. There are two phases that happen when we run our code:
 - creation phase: any variable (var, let, const) and function in our code are stored in memory. 
 - execution phase: values are assigned to the variables and functions that are in memory during the create phase

What's on the left of the = sign is stored to memory during the create phase. What's on the right is assigned during the execute phase. 

(create)        (execute)
let variable = 'value';

When JS runs, it first reads top to bottom and stores the variables, kind of like putting the chapter names in the index. After that, it reads top to bottom again in sequential order to fill out the value of each chapter. 

*/
//to move a line = click on the line, hold alt and use arrows to move up or down

let num = 12; 
// const num = 27; 'const' and 'let' does not get hoisted 
//'var' would hoist it to the top which is why we don't use 'var' a lot 
//'var' will always create a globally scoped variable
//'let' will create a locally scoped variable 
console.log(num); 

sayHi();

function sayHi() {
    console.log('hello');
    let hi = 'hola'; 
    console.log(hi);
}

//not defined 
// varFunc();

//variable first - the variable is holding the function as a value - which is why this 'function' doesn't get hoisted, however, if 'function' is on its own it will get hoisted to the top 
let varFunc = function () {
    console.log('testing')
}
varFunc();
//functions get hoisted 
