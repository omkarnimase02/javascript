console.log("High Order array Loop \n");

// 1 -> for of loop
console.log("1 -> For of Loop ");

// syntax
// for (const i of arr) {   // i means the any variable , arr  , apply the loop of that thing  arr,string ,object
    
// }

// apply on arr
let mini = 10000;
let maxi =0;
const arr = [1,2,3,4,5]
for(const i of arr){
   // console.log(`Arr ele is : ${i}`); // 1,2,3,4,5

   if(i>maxi){
    maxi =i
   }
   if(i<mini){
    mini =i;
   }
}
// console.log(`Max ele in given arr is ${maxi}`);
// console.log(`Min ele in given arr is ${mini}`);

// apply on string

const str ="Omkar Nimase"
for(const i of str){

    // break statement
    // if(i ==' '){
    //     console.log("Space is detected");
    //     break;
    // }

    // continue -> one chance
    if(i == ' '){
        //console.log("Space is detected");
        continue;
    }
   // console.log(`Each char is : ${i}`);
}

// apply on map  
// Map -> its a datastrucuture store the values in key & value pair
// keys are unique , store the unique values only
// store in original insertion order only

// create the map
const map = new Map()

// insertion
map.set('1',"Omkar")
map.set('2',"pravin")
map.set('3',"Ashutosh")

// print the single value
// console.log(map.get('1'));
// console.log(map.get('2'));

// update the value
map.set('2',"Prem")
// console.log(map.get('2'));


// print the whole map
// console.log(map);

// apply the for of loop

for(const [key,val] of map){
    //console.log(key, ':- ',val);
}

// Apply on object

const myObj ={
    1:"Omkar",
    2:"Pravin",
    3:"Ashu"
}
// print the whole obj
// console.log(myObj);

// apply the for of loop -> object are not iterable 

for(const i of myObj){
    console.log(i);
}