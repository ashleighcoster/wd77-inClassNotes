/*

OBJECTS 

*/

//Example:
let myself = {
    //key: value = key/value pairs 
    //each key/value pair is seperated by a comma 
    firstName: 'Jerome', 
    lastName: 'Flaherty',
    hairColor: 'pink',
    age: 22, 
    cool: true, 
    //array index  0       1
    interests: ['games', 'fencing'], 
    dislikes: ['spelling'],
    friend: {
        firstName: 'Eric',
        lastName: 'Winebrenner',
        fullName: function() {
            return this.firstName + this.lastName; 
        }
    },
    fullName: function() {
        return this.firstName + this.lastName; 
    }
}

//'this' - specific thing that you want from the object - can name the key to get the value 

//Property: a value on an object
//Method: a function on an object 

console.log(myself.interests); //'interests' is a property of 'myself'
console.log(myself.friend.firstName);
console.log(myself.interests[1]);
console.log(myself.fullName()); //fullName is a method of 'myself'
console.log(myself.friend.fullName()); //fullName is a method of 'friend'
//dot notation - used to get specific info from our objects - can help drill down into the object to get specific values


let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

//challenge - log one episode name 

console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);


/*
* ***********
! JSON OBJECT
* ***********
 - JSON stands for JavaScript Object Notation
 - Derived from the JavaScript Object Notation syntax, JSON is text only
 - Exists as a string
    - Useful when fetching data from a server
    - need to be converted to a native JavaScript Object if we want to access the information  

    JSON Data Example:
        https://rickandmortyapi.com/api/character
        
        PASTE THE RAW DATA INTO: https://jsonformatter.org 

*/


/*
* ***********
! PROPERTIES
* ***********

Objects are containers of properties. Properties are an association between a key-value pair. A property's value that is a function is then referred to as a function. 

*/


/*
* *****************************************
! OBJECT BRACKET NOTATION/PROPERTY ACCESSORS
* *****************************************

We can access the properties within our object using accessors like dot notation and bracket notation. 

    Property Accessors:
        - Dot Notation
        - Bracket Notation 

*/

let user = {};
console.log(user);

//We can set/add properties to objects using both bracket and square notation
user['name'] = 'Amit', //add to the object using '[]'
user['age'] = 29, 
user.coolMusic = true;  //can also set/add to the object using '.'
console.log(user);

//we can also target specific keys we created
console.log(user['name']);

/*

- All keys in objects are strings even though they are not wrapped in quotes when represented in the object itself. 
    - We can see this by using the keys() method for our object 
    - the .keys() method returns an array of the keys in our object 

*/

let keys = Object.keys(user);
console.log(keys);
console.log(typeof keys[0]);

//Square brackets are good to use when we can't use dot notation to dig through an object. It's not common, but something that we are capable of doing and want you to be aware of. 

//A big reason to use square bracket notation is when spaces are in the key name of a property. 

let spaceObj = {
    noSpaces: true, 
    'Spaces Here': true,
}

//console.log(spaceObj.Spaces Here)<-- Error: no spaces allowed in property names 
console.log(spaceObj['Spaces Here']);