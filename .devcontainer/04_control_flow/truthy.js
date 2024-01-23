console.log("Truthy && falsy values");

// truthy -> assume that given value is true

const email = "om@gamil.com"

if(email){  // at least 1 char present in string then true
    console.log("Got user Email");
}
else{
    console.log("Don't have an email");
}


//    !  acts as negative  -> true -> false & false -> true
if(!email){  // at least 1 char present in string then true
    console.log("Got user Email");
}
else{
    console.log("Don't have an email");
}

// Falsy values

// false, 0, -0,"",null, undefined , Nan, BigInt 0n , 

// Truthy -> all other from falsy
// true , "0",'false', " ",[], {},function(){}

// check empty arr is truthy

const arr=[]
if(arr.length === 0){
    console.log("Array is empty");
}

// check the obj is empty

const obj = {

}

if(Object.keys(obj).length === 0){
    console.log("obj is Empty");
}

// NUllish Coalescing operator (??)
// usefull for NULL & undefined only
// like option value -> if one nulll or undefined then other written
// if both poresent return first

// ex
let val1;
val1 = 5 ??10
console.log(val1); // -> 5

const val = null ?? 20
console.log(val);  //20

const v = undefined ?? 30
console.log(v);  // 30

const p = null ?? 29 ??8
console.log(p);  // 29

const pp = null ?? undefined
console.log(pp);

// Trnary Operator

// Syntax :->  (condition) ? true :false

const age =100
age >= 90 ? console.log("Old ") : console.log("Young");;