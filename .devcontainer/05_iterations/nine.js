
console.log("reduce() function");

// reduce () -> execute using the caLL back function
// intially store the some val
// return value from cal of the preceding ele
// return the single val

// cal the sum of arr
const nums = [1,2,3,4]

const initialVal =0;

const sumOfArr= nums.reduce(
    (accumulate , currSum) => accumulate + currSum,initialVal 
    // intitally acc -> stroe intialVal =0
    // after store the sum of Acc+currsum
)
// console.log(sumOfArr);

// Using the simple function
const newArr = nums.reduce(function (acc, currVal){
    //console.log(`Val of Acc ${acc} and the currVal is ${currVal}`);
    return acc + currVal
} ,0) // inital val of acc =0

// console.log(newArr);

// simple arrow fun
const totalSum = nums.reduce((acc,curr)=> acc+curr,0)
// console.log(totalSum);

// shoping card

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

//add the no val -> 72+76+69 = 217

const total = Array.reduce((acc,curr)=> acc + curr.No,0)
// console.log(total);

const sumt = Array.reduce(function(acc,curr){
    return acc+curr.No
},0) // inital 0
// console.log(sumt);

const tt = Array.reduce( (acc,curr) =>{
    return acc+curr.No

},0)
console.log((tt));
console.log(72+76+69);