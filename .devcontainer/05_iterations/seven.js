
console.log("some techinique");

//  add 10 in each ele in arr
// using the map() -> call back , return the value

const nums =[1,2,3,4,5,6,7,8,9,10]

// const newNums= nums.map((num) =>{
//     return num+10
// })
// console.log(newNums);


// ujsing forEach also Done
const newNums = []
nums.forEach((num) =>{
    newNums.push(num+10) 
})
// console.log(newNums);

// Chanining  -> aply the multiple condition
// each condition -> depends upon prev chain result

const newarr = nums 
                .map((num) => num*10) // 1-> mul each by 10
                .map((num) =>{   // 2 -> add 1 
                    return num+1; 
                })
                .filter( function (num){   // only eritten the 40 plus
                    return num>40 
                })

    // console.log(newarr);            