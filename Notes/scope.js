/*
Scope is the hierarchy of variables in our code. We call them:
    - Global Scope or Parent Scope
    - Local Scope or Child Scope
*/

let global = 'earth'; //exists in entire code; not specific to any local scopes 

function scopeExample() {
    let local = 'Indianapolis'; //'let' is tracked to the neareast curly boy/bracket - so 'local' can't be used anywhere other than these brackets = local scope 
    let inner = 'it has many places to visit'
    console.log(local);
    console.log(`${local} is a humble city on ${global}`)
    if(true) {
        let inner = 'what a large city';
        console.log(inner); //this one reads the 'large city' - reads in purple curly boys 
    }
    console.log(inner); // this one reads 'many places to visit' reads in the yellow curly boys
}

scopeExample();
//not defined, blocked out by scope
// console.log(local);