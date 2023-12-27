
console.log("Omkar Welcome");

// ****** String in javaScript **********
/*
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
// console.log(game.split('.'));
console.log(game.split('.'));


// .at() -> at particular index  -> also charAt()
const n = "omk ar"
console.log(n.at(-1));

// concat   -> concataanation acc to argument
const s1="om"
const s2 ="Nimase"
console.log(s1.concat("??",s2));



// endWith() -> ending of string given input or not
console.log(n.endsWith('ar'));

// startWith() -> if given string start with given input then return true
console.log(n.startsWith('omkar'));


// string concate using `${n}`  
console.log(`my name start with ${s1} and end with ${s2} also contain ${n}  and repeat ${n.repeat(4)}`);
*/

const aa = "my name is omkar, & also my name is omkar, all call me omkar"
console.log(aa.replace('my','I'));  //  only first replace my to I
console.log(aa.replaceAll('omkar','Pravin'));   // replace all omkar --> pravin

console.log(aa.substring(0,10));  // all string between 0 to 9
console.log(aa.substring(2));   // all string after index 2
console.log(aa.charAt(3));   // at index 3
console.log(aa.concat(' ',"???? omkarrrr"));  // concatenation
console.log(aa.includes('omkar')); // present or not
console.log(aa.startsWith('my')); // starinting with 'my' or not
console.log(aa.endsWith('kar')); // ends with kar or not
console.log(aa.trim()); // remove the white spaces fron=m the both the side

console.log(aa.indexOf('omkar'));// index of omkar
console.log(aa.length);  // total length of string
console.log(aa.slice(-1,4));  // print all from -1 to 0
console.log(aa.split(','));  // convert into arr based upon the space
console.log(aa.search('also')); // search the input in given string
console.log(aa.valueOf('omkar'));  


const news = new String("Omkar Nimase")
console.log(news);
console.log(news.toString());
console.log(news.valueOf("Nimase"));
