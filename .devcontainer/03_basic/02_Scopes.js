console.log("Scopes in Java script ");

// declare the variable

// USE let & const only 

let a = 10;
const b = 20;
var c = 30;

// console.log(a);  //10
// console.log(b);//20
// console.log(c); // 30

// var not use bcoz -> its not execute as blockwise  another also changes 

if(true){
    let a = 100;
    const b = 200
    var c = 3000;

// console.log(" INNER ",a);  //10
// console.log(" INNER ",b);//20
// console.log(" INNER ",c); // 30000
}

// console.log(a);  //10
// console.log(b);//20
// console.log(c); // 3000  -> not execute block wise

console.log("Nested Scopes :-  Scope whithin Scope");


// parent function not access the the var of child class
function one(){
    const name ="Omkar"  // parent class var

    // child class access the variable of parent class
    function two(n1,n2){
        const website ="Youtube"
        console.log(name);
        return n1+n2
    }

    // access the var of child
    // console.log(website);  // not access

    // console.log(9+4);

    console.log(two(5,6)); // function call
    // console.log(8+8);
}
one()

// Nested Scope in if else 

if(true){
    const name ="Omkar"

    if(name === "Omkar"){
        const last_name = " Nimase"

        console.log(name+last_name+8);  // child access the parent var
    }

    // console.log(last_name); // error  -> parent not access the child
}
// console.log(name);  // not access in the outside the class

// declaration of the function
// simple Function -> declare before the function also

console.log(addOne(2));  // -> 3
function addOne(num){
    return num+1;
}

console.log(addOne(7));   // -> 8

// Store the function in variable

// not access before the function

// console.log(addTwo(9));

const addTwo =function(num){
    return num+2
}

console.log(addTwo(9));  //11
