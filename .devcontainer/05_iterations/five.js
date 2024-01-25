console.log("For each function");

// for each loop
// High order loop  - automatically traverse the whole arr

// syntax

// using the normal function
// arr.forEach(function (i){
//     console.log(i);
// })

// array.forEach((i) => {  // using the arrow function
// console.log(i);
// });

const arr=[1,2,3,4,5]
let maxi =0;

arr.forEach(function (i){

    if(maxi <i){
        maxi =i
    }
    //console.log(i);
})
console.log("max is", maxi);   // write the maximum

// Using the arro function  
// also cal the index 7 the whole arr

const nums = [33,44,55,66]
nums.forEach( (i,index,arr) =>{
   // console.log(i,index,arr);
}) 

// direct pass the function reference as the parameter

const ar =[4,5,6,7]
// create the print function

function printMe(item){
    console.log(item);
}

// pass the function referance as the parameter
// ar.forEach(printMe)


// apply the forEach to the array within object

const Array =[
    {
        'Name':"Omkar",
        "No":72
    },
    {
        'Name':"Pravin",
        "No":76
    },
    {
        'Name':"Ashu",
        "No":69
    }
] 
// aplly the for each   -> print the name of each obj
Array.forEach((val) =>{
    // console.log(val.Name);  // omkar pravin ashu
})

// print the no of each obj

Array.forEach((val) =>{
    // console.log(val.No);  // 72 76 69
})