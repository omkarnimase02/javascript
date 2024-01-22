console.log("Objects in JS ");

// singleton
// Object.create  -> single constructor call

// Object Literals

// Object Declaration

// symbol  in object   -> store the unique values
const mySym = Symbol("Key1")
console.log(typeof mySym);
console.log(mySym);

const jsUser = {
    name:"Omkar",   // string
    age : 21,   // number
    location:"Pune",
    mail: "om@email.com",
    isLoggedIn: false,   // Boolean
    lastLogged :["Monday","Saturday"],   // array
    "Full name" : "Omkar Nimase",

    // symbol data types use in the object by using declare  its key as in the [] squyare bracket
    [mySym] : "myKey1"

}

// // Access 
// console.log(jsUser.name);
// console.log(jsUser.lastLogged);

// by default the system generate the keys values is string
// full Name kay is not access by using the (.) Dot method
// insted use the [""]
// console.log(jsUser."full name");   // not access using the dot
// console.log(jsUser["mail"]);
// console.log(jsUser["Full name"]);

// symbol ->  without squre bracket in object then treated as a string
// console.log(jsUser.mySym);   //myKey1
// console.log(typeof jsUser.mySym);  //string


// symbol with squre bracket
// console.log(jsUser[mySym]);   //myKey1
//  console.log(typeof jsUser[mySym]);

 // updates the values in the Objects byusing =

jsUser["Full name"] = "Omkar R Nimase"

// console.log(jsUser["Full name"]);


// Values Locked in Object -> .freeze() method
// if the freeze the object then further its values does not changes]

// Object.freeze(jsUser);   // freeze -> lock the objects values
// console.log(jsUser);

jsUser.age= 22;
jsUser["Full name"] = "Omkar R Nimase"


// console.log(jsUser);   // values Does not changes after freeze the object

// create the fuction

jsUser.greating = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greating);  // -> function not execute only reference is coming -> [Function (anonymous)]
console.log(jsUser.greating());// -> print   -> Hello JS User

// create the fubnction & access the object data -> using the this
// this -> access the property of that referensing object onl;y

jsUser.greatingTwo = function(){
    console.log(`Hello User My Name is ${this.name}`);
}

console.log(jsUser.greatingTwo());  //Hello User My Name is Omkar