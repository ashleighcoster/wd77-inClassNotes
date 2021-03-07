/*
PARAMETERS 

    - Parameters are values we haven't assigned yet 
    - Passed through functions called 'arguments'

    Ex:
    Function nameFunc (parameter){
        return...
    }

    nameFunc (argument);

    - parameters - naming convention/structure matters and should relate to the type of data we are collecting/running
    - naming should reflect desired data  
*/

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

coffeePot('dark roast'); //'filter' becomes whatever we invoke it as; 'dark roast' is my argument/value being passed 
coffeePot('medium roast');
coffeePot('tea');

let kettle = coffeePot; //<-- assigning function to variable = function reference 
kettle(); //<-- returned undefined because we didn't give it an argument
kettle('green tea');

//Multiple Parameters and Arguments 

function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}. To wash it down I had a ${drink}.`)
}; 

dinner('steak', 'potatoes', 'coke');
dinner('potatoes', 'coke', 'steak');
// - arguments fall in line with parameters regarding their position 

//RETURN
// - Function can mainpulate our data and return a new value. 

function calc(one, two, three) { //'one two and three' are parameters - VSC will highlight when variable is being used or unhighlight when not
    let total = one + two + three; 
    let average = Math.round(total / 3); //Math.round() rounds the value to the nearest integer
    return average;
}

let avgWeight = calc(15,60,55); //created a variable and used the function to figure it out 
console.log(`These three dogs weigh an average of ${avgWeight} lbs.`);
//avgWeight = 'average' 

console.log(calc(18,20,22));




