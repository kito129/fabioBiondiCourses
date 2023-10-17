// 10/02/2023
// 1.1 -  Intro
// 1.3 -  var vs let
// 1.4 -  const
// 1.5 -  Template literals

const age = 40
const result = `hello Mario (${age})`
console.log(result) // hello Mario (40)

// 1.6 -  Short object syntax 

const user = {
	id: 123,
	name: 'Fabio',
	surname: 'Biondi',
	profile: {
	  color: 'black',
	  location: 'Trieste'
	}
  }
  
  const id = user.id
  // if key adn value is the same you and use only the key and remove: key: value --> key
  const color = user.profile.color
  const params = { id, color }
  
  // ajax
  console.log(params)


// 1.7 -  Destructuring Array, using ... 

const list = [10, 20, 30, 40, 50]

const [a, b, ...rest] = list
// a is first, b is second, ...rest is the rest of the array
// ... is a SPREAD operator

console.log(a, b, rest)


// 1.8 -  Destructuring Object

const user2 = {
	first: 'Fabio',
	last: 'Biondi',
	preference: 'red'
  }
  

// what i extrapolate fot the object user2 
// let { first, preference: pref = 'black' } = user2

// i also can st a default value for a varaible that can o cannot be present 
let { first, preference: pref = 'black' } = user2


console.log(`${first} (${pref})`)

// 1.9 -  Destructuring Object - part 2: nested props

const user3 = {
  name: 'Fabio',
  surname: 'Biondi',
  profile: {
	color: 'red',
	location: {
	  lat: 15, lng: 12
	},
  }
}

const { 
  profile: {
 	location: {
	  lat, lng,  // if want to set default use zoom = 5
	}
  }
} = user3  // extract data from user3, use that dat to send to server or whatever

console.log(lat, lng,) // alse here for defautl zoom) // 15, 12, 5

// 1.10 Destructuring Object - part 3: rename & short object syntax


const { 
  profile: {
 	location: {
	  lat: lt, lng: lg, zoom = 5 // zoom is default value
	}
  }
} = user3


// prepare  dta to send to server
const params2 = { lt, lg, zoom } // use only key cause key and value are the same, BTS is the same of: lt: lt, lg: lg, zoom: zoom
console.log(params)

/* 
output:

{
  "lt": 15,
  "lg": 12,
  "zoom": 5
}
*/

// 2 -  Data manipulation nd Immutability

// 2.1 -  Array Spread operator: clone, merge e modifica array

const data = [1, 2, 3, 4]
const list2 = [5, 6]
const merged = [...data, ...list2, 7, 8]

console.log(merged) // [1, 2, 3, 4, 5, 6, 7, 8]

// 2.2 Object Spread operator vs Object.assign
// how to clone or duplicate and object

	// object.assign

	const obj = {
	id: 123,
	name: 'Fabio'
	}

	const cloned = Object.assign(obj) // clone of obj
	console.log(cloned) // { id: 123, name: 'Fabio' }
	// if change cloned, obj is changed too !!
	// cloned.name = 'Mario'
	// console.log(cloned) // { id: 123, name: 'Mario' }
	// it's always a pointer!!

	// to not do that do
	const merged4 = Object.assign({}, obj) // now merged4 is a clone of obj but new reference: merge with empty object and obj


	// as lecture 1.8, destructuring object
	const preferences = { color: 'red' };
						
	const merged2 = Object.assign({}, obj, preferences, { pet: 'dog' });

	console.log(merged2);
						

	/**
	OUTPUT:

	{
	"id": 123,
	"name": "Fabio",
	"color": "red",
	"pet": "dog"
	}
	*/

	// spread operator

	const preferences2 = { color: 'red' };
						
	// using spread operator to clone obj without the need of empty object
	// used a lot in redux and react and angular ngRx
	const merged3 = { ...obj, ...preferences, pet: 'dog' };

	console.log(merged3);

	/**
	OUTPUT:

	{
	"id": 123,
	"name": "Fabio",
	"color": "red",
	"pet": "dog"
	}
	*/
				
// 2.3 -  Arrow functions ( lambda functions in other languages)


var addVariable  = function addOperation (a, b) { // bets practice to always use name here to not have anonymous function error
	return a + b
}

const add = (a, b) => { // i can omit the "function", can use const or let an not var
	return a + b
}


const divide = (a, b) => a / b // i can omit the "return" and the "{}" if i have only one line of code

const pow = a => a * a // can remove () if only one parameter


const greetings = () => console.log('hello') // no parameters

greetings()

// 2.4 - Array: map

// new allocated memory

const users = [
	{"id": 10, "name": "Silvia", "age": 2, "gender": "F", city: "Gorizia"},
	{"id": 20, "name": "Fabio", "age": 40, "gender": "M", city: "Trieste"},
	{"id": 30, "name": "Lorenzo", "age": 6, "gender": "M", city: "Pordenone"},
	{"id": 40, "name": "Lisa", "age": 40, "gender": "F", city: "Gorizia"}
];

// map accept a TRANSFORMATION function

const newList = users.map(user => `${user.name} (${user.age})`) // can do inline and implicit return

// or

const newList2  = users.map(user => {
	return `${user.name} (${user.age})` // map logic, here using template literals
})
console.log(newList);


/*  output
[
"Silvia (2)",
"Fabio (40)",
"Lorenzo (6)",
"Lisa (40)"
]
*/

// 2.5 -   Array: filter
 
  
const newList3 = users.filter(user => user.age > 18).map(user => user.id)
// filter passa the object if test is true, remove if false, filter return a new array
console.log(newList);

/** output
 [
2,
4
]
*/

// 2.6 -  Array: find & findIndex

const ID = 30

const index = users.findIndex(user => user.id === ID) // return the index of the object that match the condition
users.splice(index, 1) // second params how much element to remove. Remove the object at index position, NOT good way to do that


// 2.7 -  Immutability in ES6, React, Angular, Redux

// cannot modify an object or an array, but can create a new one, useful in react, redux, angular to manage state
// 

// ADD
const user4 = { id: 50, name: 'Mario' };
let newRef = [...users, user4 ] // using let to reassign some time newRef, use spread operator

// using push, mutable way
users.push({}) 

// DELETE
const ID2 = 40;
newRef = users.filter(u => u.id !== ID2 )

// using splice, mutable way
users.splice(2,1) 

// EDIT
const updatedUser = { id: 20, name: 'Ciccio', age: 25 } // user to update
newRef = users.map(u => u.id === updatedUser.id ? {...u, ...updatedUser} : u) // ... using object spread operator

// using splice, mutable way
users[0].name = 'Ciccio' 


// 2.7 - Classes, Inheritance e lexical this

// calls in es6 is equal a var = function in es5


class Pippo {
	//class variables
	text = 'Ciao';

	// call at every new instance
	constructor() {    


		const self = this;
		setTimeout(() => { // arrow function and not function cause i want to use the lexical this
		console.log(self.text); // this.text: here is undefined, cause this i referred to the function, not to the class

		}, 2000)
	}

	// class method
	hello(value) {
		console.log(this.text + ' ' + value); // this to access a class variable
	}
}

const p = new Pippo();
// p.hello('Fabio');


// Inheritance
class Pluto extends Pippo{

}

const pluto = new Pluto()
pluto.hello('Fabio'); // method Inherited from Pippo


// 3 -  Imports and modules


// npm init
// npm install lite-server

// 3.3 - Import modules e type="module"

// how to import a module
// import { log } from './main'; // import a function from main.js
// import { log, log2 } from './main'; // import multiple functions from main.js
// import * as main from './main'; // import all functions from main.js

// <script type="module" src="index.js"></script> // add type="module" to the script tag

/* in HTML how to use script tag
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Demo ES6</title>
</head>

<script type="module" src="utility.js"></script>
<script type="module" src="main.js"></script>

<body></body>
</html>
*/

export const exportedVar = 1
// how to export also function
export const addFunction = (a, b) => a + b


// 3.4 - Import as

/*
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Demo ES6</title>
</head>

<script type="module" src="utility.js"></script>
<script type="module" src="main.js"></script>

<body></body>
</html>
*/

// main.js
import { add } from './utility.js';
import { add as newAdd } from './operations.js'; // use of AS to rename the function

console.log(add(1, 4))
console.log(newAdd(5))

// utility.js
export const add = (a, b) => {
	return a + b;
  };

// 3.5 - Import default 

import add from './utility.js'; // import default function
// does not provide an export named defaultù

// to use the previous, i need to export default in utility.js
// default is one per module!!

// utility.js
const add = (a, b) => { // define a function, then export it
    return a + b;
};

export default add; // this is the default export, if is default i can call it rename it when i import it, see main.js

// 4 - Async operations: Async, Fetch, Async wait

// callback hell!
// is not a substitute of promises

// 4.1 - Promise
// not time dependant container
// it'a broker from sync and async codeù

// can use observer pattern to subscribe to a promise, to be notified when the promise is resolved or rejected


const prom = new Promise((resolve, reject) => { // callback immediately called
    setTimeout(() => resolve(5), 3000); // resolve is a function, 5 is the value to return
	// reject('error') // reject is a function, 'error' is the value to return
});

prom.then(
    () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(50), 3000);
    })
).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);

// 4.2 - Fetch

// 4.3 - Async wait

// 5 - TypeScript: fundamentals

// 5.1 - Intro

// extend javascript language, is possible to type variables, functions, classes, interfaces, etc
// # compilation time
// useful for big projects, to avoid errors, to have a better IDE support, to have a better code readability
// to have a better code documentation
// to have a better code refactoring


// repo to use: git clone https://github.com/fabiobiondi/typescript-playground
