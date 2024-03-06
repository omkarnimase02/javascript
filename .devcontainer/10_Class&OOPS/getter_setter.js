

// get() -> get the value with apply some method  -> define the value from outside the class
// set() -> set the some value which are given the user  -> set the value in the class
// use of some properties of class not access -> not understanding the internal work of the property

// which is data is set that data is access using the get

 
// if the value of set and constructor is same then in that race the which one execute the first
// for that call stack exceeds error generate

// sol -> use the diff name in the get & name of that pproperty
// user not know the actual name in the constructor

// create claa
 class User{
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }

    // get() -> get the data with apply some method
    get pass(){  // in that name ius same
        return this._pass.toUpperCase();//access with diff var name 
    }

    set pass(value){
        this._pass = value;  // access with diff var name
    }

    get email(){
        return `${this._email + "  OMKAR"} `
    }

    set email(str){
        this._email = str;
    }
 }

 const om = new User("om@Nimase.com", "Pravin")
 console.log(om);
 console.log(om.pass);
 console.log(om.email);
 

