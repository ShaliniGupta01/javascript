const name = "shalu"
const repoCount = 50

// console.log(name + repoCount + "Value");

//strings interpolians
// uper case (To use)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hello-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0 , 4)
console.log(newString);

// slice => negative value (opposite side)

const anotherString = gameName.slice(-2 , 4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%40choudhary"

console.log(url.replace('%40', '-'))

console.log(url.includes('hitesh')) //keyword=>sunder => false

console.log(gameName.split(' - '));
