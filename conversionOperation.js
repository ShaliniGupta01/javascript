//conversion of datatypes
// let score = "33abc" //number
// let score = null //zero
// let score = undefined  // nan 

// const {score} = req.body
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN

//"33"=> 33
//"33abc"=> NaN
//true => 1; false => 0

// let isLoggedIn = 1
// let booleanIsloggedIn = Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);

//1 => true ; 0=> false
// ""=> false
// "hello"=> true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


/*******************************Operation************************/

let value = 3
let negvalue = -value
// console.log(negvalue);

// console.log(2+2, 2*2, 2/2, 2%2, 2-2, 2**3);

let str1 = "hello"
let str2 = "Shalu"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32 to primitive

// console.log( (3 + 4) * 5 % 3); //dont write messy code

// console.log(+true); //1
// console.log(+""); //0

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;  // prefix and postfix are 101
console.log(gameCounter);

