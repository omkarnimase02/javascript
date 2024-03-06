 
 // get the random color 

 const randomColor = function(){
    const hex ='0123456789ABCDEF'
    let color ='#'   // #ff ff ff  => total 6

    // tarverase loop till 6 digit hex code add in the color

    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() *16)]
    }
    return color;

 }

 // start
 let id =0;  // for refernce of clearInterval()
 const startChanging = function(){
    // setinterval conti changing
    if(!id){
        id = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
 }

 document.querySelector('#start').
 addEventListener('click',startChanging)
 

 // Stop button 

 const stopChanging = function(){
    clearInterval(id);
    id = null; // destructor
 }
 document.querySelector('#stop').
 addEventListener('click',stopChanging)