// cal the length of dting by using the function not directly  using the method

let myName = "    Omkar     "


// it is by using the method
// console.log(myName.length);
// console.log(myName.trim());
// console.log(myName.trim().length);

// cal the truelength by using the method



let anotherName = "omkarnimase   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherName.trueLength()

"prern   ".trueLength()
"omkar  and  prerna".trueLength()


//if we create the obj function the that function is access everyOne

Object.prototype.omkar= function(){
    console.log(`Omkar is present in all object`);
}

// also check for arr
Array.prototype.pravin = function(){
    console.log(`hey pravin today is aniversarry`);
}
let myArr =["omkar","pravin"];

const myObj = {
    username : "Ashu",// property
    no : 1234,

    // method

    getNum : function(){
        console.log(`Number is ${this.no}`);
    }



}

const str = "kaushal"

// myArr.omkar();
// myObj.omkar();
// str.omkar()

// console.log(myObj.getNum());

myArr.pravin();
// myObj.pravin();
// str.pravin()

// inheritance

const user ={
    usernmae : "omkar"
}

const teacher={
    makeVideo: true
}

const teachiningSupp ={
    isAvailable :false
}

const TASupport={
    makeAsssignment : 'JS assignment',
    fullTime : true,
 
    __proto__ : teachiningSupp  // inheritace
} 

teacher.__proto__ = user  // inherited property of user