
console.log("Omkar Nimase");

//. Symbvol -> for uniquckly identify

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(typeof id);
// console.log(id === anotherid);

// BigInt

const bigint = 97276691998n
// console.log(typeof bigint);

// Array
const arr =["omkar", "pravin","love"];
// console.log(typeof arr);
// console.log(arr);

const myObj = {
    name : "Omkar",
    age : 21,
}

// console.log(typeof myObj);
// console.log(myObj);

// Function
  const myFunction= function(){
    console.log("Hello  omkar");
  }
  // console.log(typeof myFunction);
  // console.log(myFunction);


  // ****************    Memory ********************

  // STACK --> Static    All primitive data types are store in the stack
             //   if new is created using the old one then they pass as copy 
            // original  not affect the new one
  
            
   // HEAP -> Dynamic used in all non - primitive data types
            //  pointing to the same references
            // onr change affect the other

// example

// stack
let name ="Omkar"

let antherName = name
console.log(name)
console.log(antherName);

antherName = "NImase"
console.log(antherName);
console.log(name);


// Heap -> references   -> one change other also change

let userOne ={
  name:"Omkar",
  age: 21,
}

let userTwo = userOne
console.log(userOne);
console.log(userTwo);

userTwo.name="Prerna"

console.log(userOne.name);
console.log(userTwo.name);







