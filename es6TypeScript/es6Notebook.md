# ES6 Notebook

## Info

[repo](https://github.com/kito129/fabioBiondiCourses/tree/master/angularFundamentals)

[Video course by Fabio Biondi](https://fabiobiondi.teachable.com/courses/enrolled/448018)
- bought on 10/01/2023
- start on 10/01/2023
- end on 10/16/2023

## 1 - ES6 Fundamentals

### 1.1 - Intro
The introductory section covers basic TypeScript concepts and syntax.

### 1.3 - var vs let
This section explains the difference between `var` and `let` when declaring variables.

### 1.4 - const
Demonstrates the usage of `const` for creating constant variables in TypeScript.

```javascript
const age: number = 40;
const result: string = `hello Mario (${age})`;
console.log(result); // Output: hello Mario (40)
```


### 1.5 - Template literals
Illustrates the usage of template literals, a powerful feature in ES6 javascript.

```javascript
const age: number = 40;
const result: string = `hello Mario (${age})`;
console.log(result); // Output: hello Mario (40)
```

### 1.6 - Short object syntax
Introduces short object syntax and its implementation.

```javascript
const user: { id: number, name: string, surname: string, profile: { color: string, location: string } } = {
    id: 123,
    name: 'Fabio',
    surname: 'Biondi',
    profile: {
        color: 'black',
        location: 'Trieste'
    }
};
const { id, profile: { color } } = user;
const params: { id: number, color: string } = { id, color };
console.log(params); // Output: { id: 123, color: 'black' }
```

### 1.7 - Destructuring Array, using ...
Demonstrates array destructuring using the spread operator `...`

```javascript
const list: number[] = [10, 20, 30, 40, 50];
const [a, b, ...rest]: number[] = list;
console.log(a, b, rest); // Output: 10 20 [30, 40, 50]
```

### 1.8 - Destructuring Object
Covers object destructuring with default values.

```javascript
const user2: { first: string, preference?: string } = {
    first: 'Fabio',
    preference: 'red'
};
const { first, preference: pref = 'black' }: { first: string, preference: string } = user2;
console.log(`${first} (${pref})`); // Output: Fabio (red)
```

### 1.9 - Destructuring Object - part 2: nested props
Explains nested object destructuring and extracting values.

```javascript
const user3: { name: string, profile: { color: string, location: { lat: number, lng: number } } } = {
    name: 'Fabio',
    profile: {
        color: 'red',
        location: {
            lat: 15,
            lng: 12
        }
    }
};
const { profile: { location: { lat, lng } } } = user3;
console.log(lat, lng); // Output: 15 12
```


### 1.10 - Destructuring Object - part 3: rename & short object syntax
Demonstrates renaming properties during object destructuring.

```javascript
const { profile: { location: { lat: lt, lng: lg, zoom = 5 } } } = user3;
const params2: { lt: number, lg: number, zoom: number } = { lt, lg, zoom };
console.log(params2); // Output: { lt: 15, lg: 12, zoom: 5 }
```
## 2 - Data manipulation and Immutability

### 2.1 - Array Spread operator: clone, merge, and modify array
Shows how to clone, merge, and modify arrays using the spread operator.

```javascript
const data: number[] = [1, 2, 3, 4];
const list2: number[] = [5, 6];
const merged: number[] = [...data, ...list2, 7, 8];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### 2.2 - Object Spread operator vs Object.assign
Compares object cloning techniques using `Object.assign` and the object spread operator.

```javascript
const obj: { id: number, name: string } = {
    id: 123,
    name: 'Fabio'
};
const preferences: { color: string } = { color: 'red' };
const merged3: { id: number, name: string, color: string, pet: string } = { ...obj, ...preferences, pet: 'dog' };
console.log(merged3); // Output: { id: 123, name: 'Fabio', color: 'red', pet: 'dog' }
```

### 2.3 - Arrow functions (lambda functions)
Introduces arrow functions and demonstrates their usage.

```javascript
const addVariable = function addOperation(a: number, b: number): number {
    return a + b;
}

const add = (a: number, b: number): number => a + b;

const divide = (a: number, b: number): number => a / b;

const pow = (a: number): number => a * a;

const greetings = (): void => console.log('hello');
greetings();
```

### 2.4 - Array: map
Explains the `map` function for transforming array elements.

```javascript
const users: { id: number, name: string, age: number, gender: string, city: string }[] = [
    {"id": 10, "name": "Silvia", "age": 2, "gender": "F", "city": "Gorizia"},
    {"id": 20, "name": "Fabio", "age": 40, "gender": "M", "city": "Trieste"},
    {"id": 30, "name": "Lorenzo", "age": 6, "gender": "M", "city": "Pordenone"},
    {"id": 40, "name": "Lisa", "age": 40, "gender": "F", "city": "Gorizia"}
];

const newList: string[] = users.map(user => `${user.name} (${user.age})`);
console.log(newList);
// Output: ["Silvia (2)", "Fabio (40)", "Lorenzo (6)", "Lisa (40)"]
```

### 2.5 - Array: filter
Demonstrates how to filter array elements based on a condition.

```javascript
const newList2: number[] = users.filter(user => user.age > 18).map(user => user.id);
console.log(newList2);
// Output: [20, 40]
```

### 2.6 - Array: find & findIndex
Illustrates the usage of `find` and `findIndex` functions on arrays.

```javascript
const ID: number = 30;
const index: number = users.findIndex(user => user.id === ID);
users.splice(index, 1);
console.log(users);
```

### 2.7 - Immutability in ES6, React, Angular, Redux
Explains the concept of immutability and its significance in various frameworks.

```javascript
// ADD
const user4: { id: number, name: string } = { id: 50, name: 'Mario' };
let newRef: { id: number, name: string }[] = [...users, user4];

// DELETE
const ID2: number = 40;
newRef = users.filter(u => u.id !== ID2);

// EDIT
const updatedUser: { id: number, name: string, age: number } = { id: 20, name: 'Ciccio', age: 25 };
newRef = users.map(u => u.id === updatedUser.id ? { ...u, ...updatedUser } : u);
```

### 2.7 - Classes, Inheritance, and Lexical 'this'
Explains the concepts of classes, inheritance, and lexical 'this'.

```javascript
class Pippo {
    // Class variables
    text: string = 'Ciao';

    // Constructor called at every new instance
    constructor() {
        setTimeout(() => {
            console.log(this.text); // 'this.text' here is undefined due to the lexical 'this'
        }, 2000);
    }

    // Class method
    hello(value: string): void {
        console.log(this.text + ' ' + value); // 'this' is used to access a class variable
    }
}

const p: Pippo = new Pippo();
p.hello('Fabio');

// Inheritance
class Pluto extends Pippo {}

const pluto: Pluto = new Pluto();
pluto.hello('Fabio'); // Method inherited from Pippo
```


## 3 - Imports and modules
Covers module imports and usage in TypeScript.

### 3.1 - Import modules and type="module"

```javascript
export const exportedVar: number = 1;

export const addFunction = (a: number, b: number): number => a + b;
```


In HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
    <script type="module" src="main.js"></script>
</head>

<body>
    <!-- Content -->
</body>

</html>
```
In main.js:


```javascript
// main.ts
import { exportedVar, addFunction } from './utility.js';

console.log(exportedVar); // Output: 1
console.log(addFunction(3, 4)); // Output: 7
```


### 3.2 - Import as

In HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
    <script type="module" src="main.js"></script>
</head>

<body>
    <!-- Content -->
</body>

</html>
```

In main.js:

```javascript
// main.ts
import { add } from './utility.js';
import { add as newAdd } from './operations.js'; // Using 'as' to rename the function

console.log(add(1, 4)); // Output: 5
console.log(newAdd(5)); // Output: 7

```

### 3.3 - Import default

In HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
    <script type="module" src="main.js"></script>
</head>

<body>
    <!-- Content -->
</body>

</html>
```

In utility.js:


```javascript
// utility.js
const add = (a, b) => {
    return a + b;
};

export default add;
```

In main.js:

```javascript
// main.ts
import add from './utility.js'; // Importing the default function

console.log(add(3, 4)); // Output: 7
```

### 3.4 - Importing Multiple Elements and Modules

In HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
    <script type="module" src="main.js"></script>
</head>

<body>
    <!-- Content -->
</body>

</html>
```

In main.js:

```javascript
// main.ts
import { add, subtract } from './operations.js'; // Importing multiple functions

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

```

In operation.js:

```javascript
// operations.ts
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

```

### 3.5 - Importing a Module as a Namespace

In HTML:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6 Modules</title>
    <script type="module" src="main.js"></script>
</head>

<body>
    <!-- Content -->
</body>

</html>
```

In mathOperations.js:

```javascript

// mathOperations.ts
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```
In main.js:

```javascript
// main.ts
import * as math from './mathOperations.js'; // Importing all functions as a namespace

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
```

## 4 -  Async Operations: Async, Fetch, Async/Await

callback hell!
promises is not a substitute of callbacks, but a way to handle them

### 4.1 - Promise
time dependant container
it'a broker from sync and async codeù

can use observer pattern to subscribe to a promise, to be notified when the promise is resolved or rejected

```javascript
const prom = new Promise((resolve, reject) => {  // callback immediately called
    setTimeout(() => resolve(5), 3000); // resolve is a function, 5 is the value to return
	 reject('error') // reject is a function, 'error' is the value to return
});

prom.then(
    () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(50), 3000); // at the end invoke a callback
    })

).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);
```

## 4.2 - Fetch

Example of fetch:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json()) // analyze in json
.then(json => console.log(json))
.catch(err => console.log(err))
```

Example of post:
    
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
```

## 4.3 - Async await

```javascript
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // await can be used only inside async function
    const json = await response.json(); // analyze in json, return a promise, can use await to stop the execution until the promise is resolved
    console.log(json);
    return json;
}

getData()
.then((json) => console.log(json))
.catch(err => console.log(err))

```


## 5 - TypeScript: fundamentals

### 5.1 - Intro

Typescript extend javascript language, is possible to type variables, functions, classes, interfaces, etc.

Useful for big projects, to avoid errors, to have a better IDE support, to have a better code readability.
Typescript help to have better code documentation and faster and more precise code refactoring.


repo to use: git clone https:github.com/fabiobiondi/javascript-playground

```typescript
let a: number = 1;
a = "b"; // error
```

### 5.1 - Use Playground

The playground can be installed locally through the Github repository clone:

```json
git clone https://github.com/fabiobiondi/typescript-playground
npm install
npm start
```
If you prefer to disable TypeScript and use plain JavaScript ES6, you can switch branches:

```json
git checkout javascript-playground
```


```md
 D:\00_projects\22_coding\fabioBiondi\es6TypeScript\typescript-playground\
```

#### COMPATIBILITY ISSUES with Node 17+

The project works correctly with Node version 16.x and does not work with higher versions. In this case, you can start it with the command npm start.

If you are using Node 18 or higher, you can use the command npm run start:node18 instead.

Since this update was made in June 2023, if you have already downloaded the project before, you will need to download the updates (git pull) or clone the project again (git clone [URL]).

#### ALTERNATIVES

Alternatively, you can create a playground project using Vite.

You can find a guide for its configuration directly on my website. Specifically, by following the first chapters of this tutorial, you can create a Vite project with TypeScript support. However, if you also want type checking (which is not supported by Vite in development but only in production), I recommend following the second chapter of the guide where I explain how to configure it.

The other chapters are not necessary as they concern test configuration.

### 5.4 - Inference

Inference is the ability of typescript to infer the type of a variable, without specify it.

```typescript
let a = 1 // inference is number

a = "ciao" //error, inference is for the first assignment, must be number
```

### 5.5 - Primitives Types

list of primitive types:

```typescript
let a: number = 1;
let b: string = "ciao";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol("ciao");
let g: bigint = 100n;
let h: any = 1; // any type, can be changed. Bad practice
```

in tsconfig.json:

```json
compilerOptions: {
    "noImplicitAny": true, // if true, any type is not allowed: we are forced to decide the type, default is false
}
```

### 5.6 - Object Types using interfaces

```typescript
let user = {id: 1, name: "Fabio"}; // type is any

// normally in user.ts we define the interfaces, we can also use Class or Type
interface User {
    id: number;
    name: string;
    age?: number; // optional property
}

let user2: User = { // type is User
    id: 1, 
    name: "Fabio"
}; 

console.log(user.surname); // error, surname is not a property of user
```

### 5.7 - Complex object types

```typescript

interface User{
    id: number
    name: string
    coords: Coords
    address?: Address // optional property
}

// user of support type interface, code is more expressive and extensible in big projects or complex objects for server response
interface Coords{
    lat: number
    lng: number
}

interface Address{
    street: string
    city: string
    homeNumber?: number
    zip: number
}


const user: User = {
    id: 1,
    name: "Fabio",
    coords: {
        lat: 1,
        lng: 2
    }
}

console.log(user)

```

### 5.7 - Array Types

```typescript
interface User{
    id: number
    name: string
    coords: Coords
    address?: Address // optional property
}

const a: User = {
    id: 1,
    name: "Fabio",
    coords: {
        lat: 1,
        lng: 2
    }
}

const b = {
    id: 2,
    name: "Mario",
    coords: {
        lat: 1,
        lng: 2
    }
}

const list : User[] =  [
    a,b,c,// c is error
    { // this is valid
        id: 2,
        name: "Mario",
        coords: {
            lat: 1,
            lng: 2
        }
    }
] 
console.log(list[0].name)

```

use of Generics in typescript: 
    
```typescript

const list2: Array<User> = [a,b,c]

list2.push({ // this is valid
    id: 2,
    name: "Mario",
    coords: {
        lat: 1,
        lng: 2
    }
})

list2.pop() // remove last element

const list 3 = list2.map(user => user.name) // return a list of names
```

### 5.8 Class and Object Types

Interface is 0byte code, is only for typescript, is not compiled in js, no space in memory

Class use OOP paradigm, is compiled in js, is a space in memory


```typescript
class User{
    // id: number
    // name: string

    constructor(private id: number, private name: string){} // parameters is also type, is not necessary to declare the propertiesù
        // if used private or public is automatic created and assigned as a property of the class
        // this.id = id
        // this.name = name
       //  this.id = id
       //  this.name = name
}

const user1: User = new User(1, 'Marco') 
const user2: User = new User(2, 'Fabio') 

console.log(user1 instanceof User) // true

```

Type useful to combine more interface or class

```typescript

type User = { // is the same, 
    id: number
    name: string
}
```

### 5.9 - Private vs Public

```typescript
class User{
    constructor(public id: number, private name: string){} 
    printName(){
        console.log(this.name)
    }    
}

const user1: User = new User(1, 'Marco') 
const user2: User = new User(2, 'Fabio') 

console.log(user1 instanceof User) // true

user2.name // error
user2.printName() // Marco
```


### 5.9 - Getter and Setter

```typescript
class User{
    constructor(public id: number, private name: string){} 
    
    printName(){
        console.log(this.name)
    }    

    get getName(){ // must have return
        return this.name
    }

    set setName(name: string){
        this.name = name
    }
}

const user1: User = new User(1, 'Marco')
user1.setName = 'Fabio' // setter and getter not parameter but as a value
console.log(user1.getName) // Fabio
```

### 5.10 - Function Types


```typescript

function multiply(a: number, b: number): number{
    return a * b
}

const result = multiply(2,3) // 6

function hello(): void{ // void is not a type, is a return type
    console.log('hello')
}

```
Method are always functions, but functions are not always methods.
Methods are inside a class, functions are not.


### 5.11 - Type, literals and Union types

```typescript
type Role = 'admin | guest' // union type
const r: Role = 'root' // error
```