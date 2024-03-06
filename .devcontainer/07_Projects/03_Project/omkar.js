 // set the local time of the clock 
const clock = document.getElementById('clock');
// const clock = document.querySelector("#clock")


// digital time change in the every second -> using the setInterval()

setInterval(function(){
    let date = new Date();

    // console.log(date.toLocaleTimeString());

    // atttach to the document
    clock.innerHTML = date.toLocaleTimeString();

}, 1000);// change in every second