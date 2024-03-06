// class in js
/*
class User{
 
    // when the class is  intitalose with one obj then instatly constructor is call
    constructor(username,email,pass){  
        this.username = username; // property
        this.email= email;
        this.pass = pass
    }

    // method / function

    encryppass(){  //  pass prevent unauthorized access or interception.
        return `${this.pass}abc`;
    }

    // also make the username capital letter
    changeName(){
        return `${this.username.toUpperCase()}`      
        
    }
}

// create the obj
const chai = new User("Omkar","om@google.com","123");

console.log(chai.encryppass());
console.log(chai.email);
console.log(chai.changeName());

*/
// behind the scene when class is not create

//// create the function
function User(username,email,pass ){  
    this.username = username; // property
    this.email= email;
    this.pass = pass;
}

// add mehod/function using the prototype
User.prototype.encryptPass =  function(){
    return `${this.pass}abc`;
}

User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const b = new User("Omkar","om@gmail.com","2908")
console.log(b);
console.log(b.encryptPass());
console.log(b.changeName());