console.log("For In loop"); 

// For in
// syntax

// for (const key in object) {

// }

const myObj ={
    1:"Omkar",
    2:"Pravin",
    3:"Ashu"
}

for(const key in myObj){
    // console.log(key);   // print the keys  -> 1,2,3
    // console.log(myObj[key]); // print the values of respected key
//console.log(`The key ${key} of value :-  ${myObj[key]}`);  The key 1 of value :-  Omkar

}

// apply the for in to arr
const arr =["js","c","cpp","py"]

for(const i in arr){
   // console.log(i);  // only show thw index -> 0,1,2,3
   console.log(arr[i]);// print the valuee
}