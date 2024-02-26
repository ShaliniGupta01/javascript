// console.log(2>1);
// console.log(2>=1);
// console.log(2!=1);

// console.log("2" > 1);
// console.log("02" > 1); // datatype same 

// The reason is that an equality check == and comparison ><>=<= work differently
//Comparison convert null to a number , treating it as 0. That's why (3) null>=0 is true and (1) null>0 is false.

//avoid that comparion
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===(strict check) conversion + datatypes

console.log("2" ===2);