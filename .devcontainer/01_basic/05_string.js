
console.log("Omkar Welcome");

// ****** String in javaScript **********

const name = "Omkar "
const age = 21

console.log(name + age +" Nimase");  // basic concatenation
 
console.log(`My name is ${name} and i am ${age} year old`);   // using the backsticks (``) -> string enterpulation

// another way to declare the string

const gameName = new String('OmNimase')

console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[7]);

// console.log(gameName.length);  // cal total length
// console.log(gameName.toUpperCase());  // upper case
// console.log(gameName.toLowerCase());  // convert ito the lowercase
// console.log(gameName.concat("nimaseee"));   // add the last
// console.log(gameName.charAt(2));   // character at particular  index
// console.log(gameName.indexOf('a'));  //  char is present which index in string

// substring -> method  (find that particular index character)
// end index is not include in output

const newString = gameName.substring(2,4);
console.log(newString);

// .slice method take the input -ve also  -> from end starint index -1  ( find the particular index character)

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


// trim function -> to remove the before & after white spaces of the input string 
const  naav ="     om??.   "
// console.log(naav);
// console.log(naav.trim());
console.log(naav.trimStart());
console.log(naav.trimEnd());


// Replace -|> remove the particular thing from string add  that new string
const url = "https://omkar.com/omkar%20nimase"
console.log(url);
// console.log(url.replace('o','pre'));

// include -> particular thing is present or not in given string

console.log(url.includes('omkar'));

// spilt() -> convert into the arr based upon the separator

const game ="om.kar.nima.seee"
console.log(game.split('.'));