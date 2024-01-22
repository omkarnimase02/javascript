console.log("IIFE -> Immeadiately Execute invoked Function ");

// IIFE -> use -> immediately execution 
// ->  solve the problem of the global scope variable

// syntax 
// ()()// 1st -> for function defination  2nd -> for execution

(function one(){
    console.log("This is function One IIFE");
})();  //  -> STOP  execution using semicolon

// also in Arrow function
(() =>{
    console.log("DB CONNECT");
})();

(() =>{
    console.log("Hello Omkar");
})();

// add variable in arrow function
((name) =>{
    console.log(`Hello ${name}`);
})('Pravin');


// ADDition 
((n1,n2) =>{
    
    console.log(n1+n2);
})(4,5);