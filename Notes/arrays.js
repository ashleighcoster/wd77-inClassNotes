/*
ARRAYS 
*/

//We use arrays to store mulitple values within an array 

let array = ['value1', 'value2', 'value3'];

//bracket notation calls a value within an array 
//This is how we target specific values in an array 
console.log(array[0]);

//If we don't know the length of the array, we can use the .length method to find out 
console.log(array.length); //how many values in an array 

//We can create array objects by using the array() constructor 
let test = new Array
console.log(test);

let test2 = new Array(3);
console.log(test2);

console.log(test2.length);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//forEach loop - need an array first 
array.forEach((value) => console.log(value));

array.forEach((value) => {
    console.log(value);
})

// let array = ['value1', 'value2', 'value3'];

//anonymous functions 
// array.forEach(function(value){
//     console.log(value);
// })

//array.length method returns the length of the given array 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges']; 
console.log(shoppingList.length);

//array.push add element to the end of the array
shoppingList.push('salt');
console.log(shoppingList);

//array.pop will remove the last element from an array and return it 
shoppingList.pop();
console.log(shoppingList);
let grenadine = shoppingList.pop(); 
console.log(shoppingList);
console.log(grenadine);

//array.unshift will add a new element at the beginning of the array 
shoppingList.unshift('salt');
console.log(shoppingList);

//array.shift will remove the first element at the beginning of the array 
shoppingList.shift();
console.log(shoppingList);

//array.map transforms the elements in the original array by calling the given function once for each element in the array 
console.log(shoppingList.map((value) => value.toUpperCase()));

//array.filter creates a new array with only the elements that pass the test in a given function 
console.log(shoppingList.filter(value => value.startsWith('l')));

//array.find returns the first element in the array that passes a test given as a function 
console.log(shoppingList.find(value => value.startsWith('l')));

//array.reduce executes a given function for each value of the array and returns a single value 
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

let costs = [1, 1, 1, 1, 1,1];
console.log(costs.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue); 
    return accumulator + currentValue; 
}, 10))

//array.includes determines whether an array has a specific element 
//will return true or false -not a value 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges']; 
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

//array.indexOf searches our array for a specific element and rerun the first index of it - it will return -1 if it is not found

console.log(shoppingList.indexOf(('lemons')));
console.log(shoppingList.indexOf(('salt')));

//array.findIndex returns the index of the first element in an array that passes the test in a given function 
//returns -1 when an element is not found 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges']; 
console.log(shoppingList.findIndex(value => value.startsWith('g')));
console.log(shoppingList.findIndex(value => value.startsWith('y')));

//array.every checks if all elements in an array pass a test given as a function. If there is 1 element that returns as false, the funtion returns false and does not continue to check the rest of the elements 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges']; 
console.log(shoppingList.every(value => value.length < 1));
console.log(shoppingList.every(value => value.startsWith('c')));

//array.concat merges two or more arrays and returns a new array 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
let anotherList = ['salt', 'mint leaves', 'olives'];
console.log(shoppingList.concat(anotherList));

//array.slice will select a part of an array and return a new array. we can select the elements by providing a start and end argument, which will be indicated by the index. It will NOT include the last end argument. 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 3));

//array.splice add/removes elements in an array and returns the removed elements. 
//First argument takes in an integer that specifies at what index to add/remove elements. 
//Second argument takes in the number of items to be removed. 
//Optional third argument takes in new elements to be added to the array 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
shoppingList.splice(2, 1);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries', 'salt'); //removes lemons and replaces with cherries
console.log(shoppingList);

//array.sort will sort the items in an array. The sort order can be alphabetic or numeric, and either ascending or descending
//by default, sort() orders the values as strings in alphabetical and ascending order
//It can take in a compare function which indicates if you want it to be ascending or descending 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let nums = [25, -9, 15, 1000];

//descending order: 
console.log(nums.sort((a, b) => b - a));

//ascending order: 
console.log(nums.sort((a, b) => a - b));

//array.reverse will reverse the order of the elements in an array
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

//array.toString will convert an array into a string 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

//array.join converts the elements of an array into a string. 
//Can accept an optional parameter, 'seperator', which indicates how the element will be separated. 
//The default separator is a comma
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(shoppingList.join('! and '));

//Spread operator: it's indicated by 3 dots, "..." 
//It expands the contents of the array and takes it out of the array structure 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
console.log(...shoppingList);



