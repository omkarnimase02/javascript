
console.log("While & Do while Loop");

// While loop Syntax 
// while ( ) {
    
// }

// print the first 10 natural num

let i=1; // initialization

while(i <= 10){  // check condtion if true then executa the block

    // apply conditon   using break
    // if( i== 5){
    //     console.log("5 Dectected");
    //     break;  // stop execution
    // }

    // continue -> one mistake is free
    // if(i == 5){
    //     console.log("5 dectected");
    //     continue;
    // }
   // console.log(`Value of i is : ${i}`);
    i++; // updataion
}

/// array using the while

let myarr =[2,3,4,8,88,7]

let n = myarr.length


let x =0;  // initialization
let cnt =0;// cnt the even ele in arr

while(x<n){
    // const ele = myarr[x];
    // console.log(ele);

    if(myarr[x] %2 ==0){
        cnt++;
        //console.log(`Even nums is : ${myarr[x]}`);
    }
    x++;
}

// total even num in arr
 //console.log(`Toatal even num cnt is :- ${cnt}`);
 

 // do while loop

// syntax  -> compulsary ione time execution
// do {
    
// } while (condition); 

let a =10;

do{
    console.log(`Value of a is ${a}`);
    a--;
}while(a>11)

// do while in arr

let arr =[3,4,5,6,7]
let m= arr.length;
let k=0;

do{
    console.log(`Value of index ${k} is : ${arr[k]}`);
    k++;
}while(k <arr.length)