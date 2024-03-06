// inheritance

// access parent class using extend

// access property of parent class using super()
 
class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// create the child class
class student extends user{
    constructor(username,email,pass){

        // access prop of parent using the super
        super(username)
        this.email = email;
        this.pass = pass;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

// create instance of class
const k =new user("Kaka")
const om = new student("omkar","om@goole.com","1234")
console.log(om.logMe());
console.log(k);
console.log(k.logMe());

console.log(om.addCourse());

console.log(om instanceof student);  // check child of . or not