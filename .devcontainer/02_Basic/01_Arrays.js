console.log("Part 2 of Basic :--> Arrays ");

// Declaration arr in js

const myArr = [0, 1, 2, 3, 4, 5]

const myhero = ["Shivaji_Maharaj", "Sambhaji"]

// dynamcally
const myArr2 = new Array(1, 2, 3, 4, 5)


/*


// Access using the index only
// console.log(myArr[3]);  // -> 3
// console.log(myhero[1]); // -> sambhaji


// Basic methods
// push(x) -> insert the given  ele in arr last last

//myArr.push(9);
myArr.push(10);

// pop() -> remove the last element from the arr -> no any argument is passing

myArr.pop();  // -> remove 10
console.log(myArr);

// myhero.pop()
// console.log(myhero);   // shivaji Maharaj
// myhero.pop()
// console.log(myhero);   // []  empty
// myhero.pop()
// console.log(myhero);  // [] empty


// unshift() -> insert the given ele at index 0
// insert at the starting
myArr.unshift(11); // add 11
myArr.unshift(12)   // add 12 at starting

console.log(myArr);

// shift()  -> remove the starting element from the arr

myArr.shift();  // remove 12
myArr.shift()   // remove 11
console.log(myArr);


//.includes(x) -> given x is present or not in arr  --> bool type ans

console.log(myArr.includes(4));  // present -> true
console.log(myArr.includes(19));  // not present -> false


// indexOf(x) -> state that the index of given element in arr
              // if not present then return -1
 
console.log(myArr.indexOf(4)); // -> 4
console.log(myArr.indexOf(19)); // -1  -> not present in arr


// convert into the string 
//   .join() -> Adds all the elements of an array into a string, separated by the specified separator string.
const newArr = myArr.join()  // -> add all value of myArr into newArr with string type
console.log(myArr.join());  // [0,1,2,3,4,5]
console.log(newArr);//  0,1,2,3,4,5

console.log(typeof newArr);   // String

*/

// slice && splicw method in arr


// slice  -> not change the content of oringinal arr
//        -> create the copy of an arr or return the portion of the arr -> last index is not include
//        -> create the shallow copy
console.log("A " ,myArr);  

const myn1 = myArr.slice(1,3);  // print in range (1 ,3)  -> 3 not include

console.log(myn1);   //[1,2]
console.log("B " ,myArr);  // not affet the original arr


//splice  -> change the cintent of the original Arr
//        -> Add & remove element of an existing arr
//        -> Return the value will be the removed items from an array
//        -> if nothing was removed from an arr then return the value empty arr

//  splice(x,y,"i") ->   x = starting index where to start delete
//                       y =-> cnt the hoe may ele will delete
//                       i -> optional if any insert -> at starting x index


const myn2 = myArr.splice(1,3,9)  // -> (starting delete index 1) ->( total 3 number deleted) -> (& add 9 at index 1)
console.log(myn2);  // print only  delted element -> 1,2,3

console.log("C ", myArr);   // delete the above ele from the original arr also