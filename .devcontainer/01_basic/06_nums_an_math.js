console.log("Nums and math study ");


// Nums
const score = 29
console.log(score);

//Dynamically
const balance = new Number(8)

// console.log(balance);
// console.log(balance.valueOf());   // convert into the number
// console.log(balance.toString().length);  // convert into the string

let num = 12345.6789;

// console.log(num.toFixed());  // tofixed() -> how many total decimal points decide
// console.log(num.toFixed(1));  // -> 12345.7
// console.log(num.toFixed(3));  // 12345.679
// console.log(num.toFixed(6));  // 12345.678900


// .toPrecision()  -|> give the total nmber of digit in number
num = 1.2344
// console.log(num.toPrecision());  //  1.2344
// console.log(num.toPrecision(1));  //  1
// console.log(num.toPrecision(2));  //   1.23
// console.log(num.toPrecision(5));  //  1.2344

//  .toLacaleAS
const hun = 1000000
// console.log(hun.toLocaleString()); // -> print in US system rule -> 1,000,000
// console.log(hun.toLocaleString('en-IN')); // -> print in indian format -> 10,00,000


// ++++++++++ Maths +++++++++++++++


console.log(Math.abs(-4));  // give the result in positive
console.log(Math.round(4.3));  // rounded as same math 5 next become next integer
console.log(Math.round(5.5));

console.log(Math.ceil(5.1));   // give the next value  -> 6
console.log(Math.floor(5.9));   // give the small value  -> 5

console.log(Math.sqrt(25));  // squareroot of any num
console.log(Math.SQRT1_2);   // 1 divide  sqroot of 2
console.log(Math.SQRT2);  // squart root of 2

console.log(Math.pow(2,3));
console.log(Math.pow(4,3));
console.log(Math.pow(2,10));

// min && max in array
const arr=[ 1,3,4,5,6,7,8,9];
console.log(Math.min(...arr));  // give the mini of the arr ->1
console.log(Math.max(...arr)); /// max value -> 9

console.log(Math.min(1,2,3,4,5,6,7,8,9));  // give the mini of the arr ->1
console.log(Math.max(9,8,7,6,5,4,3,1)); /// max value -> 9

const a = 8;
const b = 29;
const c = 88

console.log(Math.min(a,b));
console.log(Math.max(Math.max(a,b),Math.min(a,c)));

// rondom() -> any random 0 to 1 decimal
console.log(Math.random());   // 0.323 to 1
console.log(Math.random() *10);  // 0.11 to   9.1313123
console.log((Math.random() *10) +1);  // grater than 0 to 9
console.log(Math.floor((Math.random() *10) +1));  // give one digit -> 1 to 9
