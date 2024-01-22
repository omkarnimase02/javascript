console.log("Function & parameter in JS");

// create the function

function sayMyName(){

    console.log("O");
    console.log("M");
    console.log("K");
    console.log("A");
    console.log("R");
}

// print
// sayMyName   // -> only pass th reference

// sayMyName() // ->  print the all data
// sayMyName()

// / pass using the argument
// function add(c,y){
//     console.log(c+y);
//     console.log(c*y);
//     console.log(2*y -c);
// }

// add(5,7)
// add(9,8)
// add(-20,10)

// Function with the return type

function add(n1,n2){
    let sum = n1+n2;
    // return sum;

    // also direct return
    return n1+n2;
}
console.log(add(29,8));;

// store the result in 1 variable
const res = add(22,3)
console.log(res);

// Types of argument pass


// if undefined is pass then set the default value to run
function loginUsermesseage(userName =" pravin"){

    // intriduce the if else statement

    //if(userName === undefined){  // ===  match value with the dataType

        if(!userName){  // also use 
        console.log("Pleaase enter the valid");
        return ; //  just return without type
    }

    return `${userName} just logged in`
}

// pass with some value
console.log(loginUsermesseage("Omkar"));  // omkar just logged in

// pass empty string
console.log(loginUsermesseage(" "));  //  just logged in

// not any argument
console.log(loginUsermesseage());  // undefined just logged in



// Different types of para passing

function cardprice(num1){
    return num1
}
console.log(cardprice(200));  // 200

console.log(cardprice(200,300,400,500));  // 200 print only

// solve above multiple value para using the spread / rest operator  [... num1]
// store in the arr format

function cardprice2(...num1){
    return num1
}
console.log(cardprice2(200,300,400,500));  // [ 200, 300, 400, 500 ]

// some match & some ramin then ramin in the ...

function cardprice2(val1,val2,...num1){
    return num1
}
console.log(cardprice2(200,300,400,500));  // [ 400, 500 ]   ->> 200,300 are assign to the val1 & val2


// pass the object in the function

const user={
    name :"omkar",
    price :199
}

function handdleobj(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
}
handdleobj(user)

// Direct the obj passing
handdleobj({
    name:"Pravin",
    price: 9766570194
})


// pass the arr into the function

const myarr=[100,200,300,400]

function returnSecVal(getarr){
    return getarr[2]
}

// call function
console.log(returnSecVal(myarr));

// dirsct passing
console.log(returnSecVal([200,300,400,500]));
