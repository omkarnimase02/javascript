// ststic -> to stop the access of property/ method -> to parent & child also

class user{
    // property
    constructor(name){
        this.name= name;
    }

    // Method 

    logMe(){
        console.log(`USERNAME is :${this.name}`);
    }

    // add static to stop the accees
    static createId(){
        return 123;
    }
}

// create the child class
 
    class teacher extends user{
        constructor(uname,pass){
            super(uname); // access parent prop
            this.pass = pass;
        }
    }


    // create the obj of parent & child

    const om = new teacher("Omkar" ,"123")
    console.log((om));
    console.log(om.logMe());  // access
    // console.log(om.createId());  // not access becoz of static
 
    // 
    const k = new user("kaka");
    console.log(k.logMe());  // access
    // console.log(k.createId());  // not access becoz of static