// Primitive 

// 7 types: String, Number, Boolean , null , undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 222424679930n


// Reference (Non primitive)

//Array, Objects, Functions
//datatypes= object

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"shalu",
    age: 20, // object
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive)      , Heap (Non Primitive)

let myYoutubename = "hiteshcharandotcom"

let anothername = myYoutubename

console.log(anothername);
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@hoohle.com"

console.log(userTwo.email);
console.log(userOne.email);