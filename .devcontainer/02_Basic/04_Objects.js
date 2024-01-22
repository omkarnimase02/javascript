

console.log("Objects_Part2");

// create the object using singleton or using the constructor
const tinder = new Object();
console.log(tinder);  // empty {}

// or non singleton
const tinderuser = {};  // also empty

// add the some values 

tinder.id="123abc",
tinder.name="Omkar",
tinder.islogged = false

// console.log(tinder);

// create the objects inside an another objects

const regular ={
    email :"omnimase@gamil.com",
    fullname :{   // another objects

        userFullName:{
            firstname: "Omkar",
            lastname :"Nimase"
        }

    }
}

// console.log(regular);  // full regular object
// console.log(regular.fullname);  // whole fullNmae objects

// console.log(regular.fullname.userFullName);  // userFullName object
// console.log(regular.fullname.userFullName.firstname);  // single fullname entity

// merge the 2 objects

const obj1 ={ 1 :"a",2:"b"}
const obj2 ={3 :"c",4:"d"}


// 1 --> direct merge
// const obj3 ={obj1,obj2}  // print obj wise
// console.log( obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// 2 -->  merge using the Object.assign() -> copies all enumerable own properties into the target object
// use the source & target obj ->  copy all the value into the target
// const obj3 = Object.assign({} , obj1,obj2);  // --> {} - target obj  
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// 3 ->  Mergge usiong the spread ...
const obj3 ={...obj1, ...obj2};
console.log(obj3);


// Find out the all keys in the objects
console.log(Object.keys(tinder));  // print in the arr format

// also the values
console.log(Object.values(tinder));   // all values in arr format

// Entries
console.log(Object.entries(tinder)); // arr inside arr -> key & its value in sub arr

// given property is present or not
console.log(tinder.hasOwnProperty('name')); // return in the boolean
