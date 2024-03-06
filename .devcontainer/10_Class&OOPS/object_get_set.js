// object base get & srt

const user ={
    _email : "o@p.com",
    _pass :"op",

    get email(){
        return this._email.toUpperCase();
    },
 
    set email(val){
        this._email = val;
    }


}
console.log(user);
console.log(user.email);

// copy the object into the another obect

const pr = Object.create(user);
console.log(pr.email);