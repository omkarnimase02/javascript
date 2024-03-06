
// Promise -> the promise object repre. the eventual completion(or failure)
// of an asyn operation & its resulting value

// states -> 
// 1-> Pending - initial state , neighter fulfil nor rejected
// 2 -> Fulfilled - operation was completly successful
//3 -> Rejected - operation failed

// method to handle the Promise -
// .then() if response is coming  -> resolve
// .catch() - if any error is occured  -> reject 
// .finally() - all thing ocuurs, always to run

// dirct handle promise using asyn & await-> try & catch
// Create the Promise -> using 2

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task is completed");
        resolve(); // -> to connect for consume the promise
    },1000)
});

// consume
 promiseOne.then(function(){
    console.log("Promise is Consume");
 })

 // dirct use

 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve();  // connect promise for consume 
    },1000)

 }).then(function(){
    console.log("promise 2 Complete \n");
 })

 // create the promise with some parameter
 const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Asyn task 3");
        resolve({Name : "Omkar", email : "om@nimase.com"});  // connect promise for consume 
    },1000)
   
 })
 

 promiseThree.then(function(user){
    console.log(user);
 });

 console.log("\n\n");
 // introduce the error
 // .catch() -> error handle\

 const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        console.log(("\n\n Asyn task 4"));
        if(!error){ // handle .then()
            resolve({Name : 'Omkar',Pass:"om@29"})
        }
        else{  // handle .catch()
            reject('ERROR : Something went wrong \n')
        }
    },1000)
 })

 // consume
 promiseFour.then(function(user){
    console.log(user);
    return user.Name;
 }).then(function(Name){   // .then() -> run in chaning -> based on prev then
    console.log((Name));
 }).catch(function(error){  // handle error in reject
    console.log(error);
 }).finally(function(){  //  always run  // work is comple or not
    console.log("The promisse is resolved or rejected");
 })

 console.log("\n\n");

// p5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        console.log(("\n\n Asyn task 5"));
        if(!error){ // handle .then()
            resolve({Name : 'Pravin',Pass:"29"})
        }
        else{  // handle .catch()
            reject('ERROR :  404 not found \n')
        }
    },1000)
 })

 // handle  using asyn -> direct handle the promise
 //  not handle the error


 // without using the try catch -> no error handle
//  async function consumepromiseFive(){
//     const res = await promiseFive;  // store in 
//     console.log(res);
//  }
//  consumepromiseFive()

 // asyn  -> using try catch to handle the error

 async function consumepromiseFive(){
    try {
        const res = await promiseFive;  // store in 
        console.log(res);
    } catch (error) {
        console.log(error);
    }
 }
 consumepromiseFive()

 /*
 // use the direct fetch the api
console.log("Using the Direct fetch API \n\n");
 async function getUserAll(){
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);


    } 
    catch (error) {
        console.log("E:",error);
    }
 }
 getUserAll();
 */

 // using the .then() & catch()
 console.log("Uidng then & catch");

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((res) =>{
    return res.json()
 })
 .then((data) =>{
    console.log(data);
 })
 .catch((error) =>{ // handle error
    console.log(error);
 })