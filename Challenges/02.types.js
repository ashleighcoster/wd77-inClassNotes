/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let myObject = {
    name        : 'Ashleigh', 
    age         : 39, 
    isEnrolled  : true,  
    About       : {Hobby: 'gardening', Address: '615 Main St.'},
} 

console.log(myObject.name);
console.log(typeof myObject);


/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/


if(myObject.age !== typeof number){
    console.log('What are you?'); 
}

if(myObject.age != Object || Boolean || String || Number){
    console.log("Object is an object");
} else{
    console.log('What are you?!');
}

console.log(typeof myObject.name);

let value = typeof myObject.age; 
console.log('value:', value);

if(value === 'string') {
    console.log('this value is a string');
} else if (value === "number") {
    console.log('number');
} else if (value )