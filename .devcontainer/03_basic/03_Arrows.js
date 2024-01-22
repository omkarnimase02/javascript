console.log("THIS and Arrows function ");

// THIS  -> Reffer to current context

const user ={
    userName :"Omkar",
    price:999,

    // metghod
    welcomeMessage : function(){
        console.log(`${this.userName} , welCome to the website `);  // this -> refer to the current context
       // console.log(this);  // shoe the current context 
    }

}
user.welcomeMessage();

///. change the context
user.userName ="Pravin"
user.welcomeMessage()

// console.log(this);  // referr outside the block as empty

// THIS -> not work in the function

function one(){
    let name ="Omkar"
    // console.log(this.name);  // not access  // undefined
    // console.log(this);
}
one() // call the function


// not work this in  function declare in the var
// const chai = function(){
//     let name ="pravin"
//   //  console.log(this.name);   // also undefined 
// }
// chai();

// not work this in arrow function
const chai =() =>{
    let name ="omkar"
    console.log(this.name);  // undefined
    console.log(this);
}
chai()

// ARROW function

// dclare 
/*  // 1 -> 
() => {

}
*/

// Declare to store in var
const addTwo = (num1,num2) =>{
    return num1+num2;
}
console.log(addTwo(3,4));  // 7