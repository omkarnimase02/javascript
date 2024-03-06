
// old time set & get

function User(email,pass){

    // constructor
    this._email = email;
    this._pass = pass;

    // get & set 

    Object.defineProperty(this,'email',{
        // get thr value
        get:function(){
            return this._email.toUpperCase();
        },

        // set the value 
        set:function(value){
            this._email = value;
        }
    })

    // also for pass
    Object.defineProperty(this,'pass',{
        get: function(){
            return `${this._pass + " I Love you"}`
        },

        set:function(value){
            this._pass = value
        }
    })
}

const om = new User("pravin@29gmail.com","9545610194");
console.log(om);
console.log(" Gmail is: ",om.email);
console.log(" Pass is: ",om.pass);