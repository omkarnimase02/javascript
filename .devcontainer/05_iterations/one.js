
console.log("Iterations --  Loops");


// For Loop

// ?? SyntaxError

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// print 1 - 10
for(let i=1;i<=10;i++){
    const ele = i;

    if(i ==5){
        //console.log("5 is present");
    }
    //console.log(ele);  // 1,2,3,4,5,6,7,8,9,10//
}



// nested Loop loop within loop

// print the table of 1 to 10
for(let i=1;i<=10;i++){
    // console.log(`Outer Loop val : ${i}`);
    for(let j=1;j<=10;j++){   // nested loop
        //console.log(`Inner loop val : ${j}  and inner Loop ${i}`);
       // console.log(i +'*'+ j + '=' + i*j);
    }
}
/*
 Outer Loop val : 0
Inner loop val : 0  and inner Loop 0
Inner loop val : 1  and inner Loop 0
Inner loop val : 2  and inner Loop 0
Outer Loop val : 1
Inner loop val : 0  and inner Loop 1
Inner loop val : 1  and inner Loop 1
Inner loop val : 2  and inner Loop 1
Outer Loop val : 2
Inner loop val : 0  and inner Loop 2
Inner loop val : 1  and inner Loop 2
Inner loop val : 2  and inner Loop 2
*/



// For  loop -> to traverse the the arr

let myArr =["Omkar ","Patil","Pravin"]

let n = myArr.length;
console.log(n);  // length of arr -> 3

for(let i=0;i<n;i++){
    const ele = myArr[i];
   // console.log(ele);
}



// cal the max 
const arr =[2,4,5,7,1,66]


// MINI  -> minimum
let mini = Math.min(...arr)
// console.log(mini);  // 1
// console.log(Math.min(...arr));  //1

// max in arr
let maxi = 0

for(let i=0;i<arr.length;i++){
    if(maxi < arr[i]){
        maxi = arr[i]
    }
}

// console.log(maxi);  // 66

// Keywords in for loop -> break & continue

// Break  -> after specific condition is satisfy then go outside the for loop block

for(let i=1;i<=10;i++){
    if(i ==5){
        console.log("5 is Detected");
        break; // after reach then break the execution
    }

    console.log(`Value of i is ${i}`);
}