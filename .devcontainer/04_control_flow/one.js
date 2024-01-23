console.log("Control Flow Statements");

// If -> condition based if condition is true then and then only execute

// syntax
// if(condition){  /// conditon id true -> execute

// }

// mostly condition is in comparision operator
// <, >, <=, >=, ==, !=, ===, !==

// const a = 29

// if(a >= 20){
//     console.log("Happy Birthday");
// }

// // else ->  the condition of if block is false then only else block exeecute

// else{
//     console.log("Blocked");
// }
// console.log("Execute");  // outside the block always execute

// check the Scope of the block
// if var declare in the scope r execute the within the block only -> not execute the uotside the block

// const score = 300;
// if(score> 100){
//     const a = 20; // a execute in the if block only
//     console.log(a);
// }
// console.log(a) // not assign;

// let x =10;
// if(x>=10){
//     x++;
// }
// else{
//     x--;
// }
// console.log("x is " ,x);

// short hand notation

// const  bal = 200;
// if(bal > 100) console.log("greater than 100");

// nesting conditions

// const bal = 600;

// if(bal <500){
//     console.log("less than 500 ");
// }
// else if(bal <900){
//     console.log("less than 900 ");
// }

// else if(bal <700){
//     console.log("less than 700 ");
// }


// else{
//     console.log("balance is here ");
// }

// Multiple codition using -> logical operator && ||

const userLoggedIn = true;
const debitcard = true;
const loggedinfronEmail = false;
const loggedInFromGoogle = true

if(userLoggedIn && debitcard){  // && -> all cases true then execute
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedinfronEmail){  // || -> at least oone true
    console.log(" user logged In");
}

if(loggedinfronEmail && debitcard){
    console.log("xxxx");
}
else{
    console.log("false");
}