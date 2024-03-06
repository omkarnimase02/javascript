
// Object Literals -> collection of properties & Methods

const user ={

    username :"Omkar",   // properties
    loginCnt : 8,
    signedIn : true,

    getUserD: function(){ 
        console.log("Got userDetails from the  data base");

        // this. -> represent the curr function context value 
        console.log(`Name of the user is ${this.username}`);
        console.log(this); // print whole curr context

    }
}
// AAcees
// console.log(user.username);
// console.log(`Name of the user is ${user.username} and logincnt is ${user.loginCnt}`);
// console.log(user.getUserD());
// console.log((this));  // {} -> in node no any method

// console.log(user);


// Constrctor function  -> Every time create the new instance 

function users(username,loginCnt,signedIn){

    // properties
    this.username = username
    this.loginCnt = loginCnt
    this.signedIn = signedIn

    // also ceate the method / function

    this. greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

// create the instance of the fuction
// new -> 1 - Every time create the new copy of empty object , instance ]
       // 2 -> Constructor fun is call using the new kyword
       // 3 -> using this keyword inject the all argument into the object

 const userOne = new users("Omkar",8,true);
 const userTwo = new users("Pravin",29,false)
 console.log(userOne);
 console.log(userTwo);
