console.log("Basic Array Part 2");

const my_hero= ["thor","IronMan","spiderMan"]
const dc_hero =["superman","flash","batman"]

// push all dc into the myhero

//my_hero.push(dc_hero);   // insert as a single element -> its state that the arr contain the any data types

// insert dc_heroes arr as a single element -> all store in index 3

// console.log(my_hero);  //[ 'thor', 'IronMan', 'spiderMan',{ [ 'superman', 'flash', 'batman' ]} ]
// console.log(my_hero[3]);  // [ 'superman', 'flash', 'batman' ]
// console.log(my_hero[3][0]);   // 'superman'
// console.log(my_hero[3][1]);  // 'flash'
// console.log(my_hero[3][2]);   // 'batman' 

// concat() -> concat the 2 or more arr  & return the new arr
const neww = my_hero.concat(dc_hero)
// console.log(neww);

const newA =[...my_hero, ...dc_hero];
// console.log(newA);

// arr into arr
const another_arr =[1,2,3,[4,5,6],7,[4,5,[9,8,7]]]
console.log(another_arr);

// print the above arr into single value using the .flat()
const real_another_arr =another_arr.flat(Infinity)
console.log(real_another_arr);

// data in the from of objects , strings , node.js are converted into arr 

// uding from

console.log(Array.isArray("Omkar")); // -> detect given is arr or not -> false

// convert string into arr
console.log(Array.from("Omkar"));    // [ 'O', 'm', 'k', 'a', 'r' ]

// object off key:value pair not directly convert

console.log(Array.from({name:"OPmkar"}));
console.log(Array.from(["omkar","omk"]));

// convert the multiple  number into arr

// using of( also)
let s1 =100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3))
console.log(Array.from([s1,s2,s3]))