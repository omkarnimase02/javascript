console.log("Omkar Nimase");

let score = 33;  //-> number
let mark = "95.45" // -> string

//print both as direct or by method
console.log(score);
console.log((mark));

// convert string into the number

let val = Number(mark);


console.log(typeof val);
console.log(val);

let st ="29pre"

let num = Number(st)   // -> convert into number but value is not a number 

console.log(typeof num);
console.log(num);



// number into string

let n = 9545.3

let str = String(n)
console.log(typeof str);
console.log(str);


// null  to number
 st =null
 console.log(typeof st);
 num = Number(st)   // -> convert into number but value is not a number 

console.log(typeof num);
console.log(num);  // 0

// undefined to number
// null
st =undefined
console.log(typeof st);
num = Number(st)   // -> convert into number but value is not a number 

console.log(typeof num);
console.log(num);  // NaN

// boolean to number
// null
st =true
console.log(typeof st);
num = Number(st)   // -> convert into number but value is not a number 

console.log(typeof num);
console.log(num);  // 1

// number into boolean

let isLog = 0
let boolisLog = Boolean(isLog);

console.log(boolisLog);

// string into boolean

 isLog = "1"
 boolisLog = Boolean(isLog);

console.log(boolisLog);

// number into string

 let isNum = 23
 let stringNum = String(isNum)
  
 console.log(typeof stringNum);

console.log(stringNum);