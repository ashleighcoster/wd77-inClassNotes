/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

var myName = 'Ashleigh';
console.log(myName.length);

var friendName = 'Clayton';
console.log(friendName.length);


/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/

if (myName.length >= friendName.length){
    console.log('My name is longer.');
} else{
    console.log('Danielle has a longer name.');
}

/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

console.log(myName.length - friendName.length);

`$(myName) is longer than $(friendName)`

if(myName.length > friendName.length){
    console.log('Ashleigh is longer by', (myName.length - friendName.length), 'letter.')
} else {
    console.log('Clayton name longer by', (friendName.length - myName.length), 'letter.');
}





