# Projects related to DOM
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## project  1  solution

```javascript
console.log("Project 1")
// 1- > select the body && button

const buttons =document.querySelectorAll('.button')
const body= document.querySelector("body")

// apply the foreach loop on buttons

buttons.forEach(function(button){

    //  add evet 
    button.addEventListener('click',function(e){
        console.log(e);  // mouse click 
        console.log(e.target);  // on which button click

        // find out the id using .  & apply the if elese statement

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;  // change the bccolor in body
        }

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

// select the button
const butt = document.querySelectorAll('.col')

butt.forEach(function(but){
    console.log(but);

    but.addEventListener('click',function(e){

        console.log(e);
        console.log(e.target);
        const key = e.target.id;

        switch (key) {
            case 'pink':
                body.style.backgroundColor= key;                
                break;

                case 'green':
                    body.style.backgroundColor= key;                
                    break;
                    
                    case 'orange':
                body.style.backgroundColor= key;                
                break;

                case 'red':
                body.style.backgroundColor= key;                
                break;
        
            default:
                break;
        }

        // if(e.target.id === 'pink'){
        //     body.style.backgroundColor = e.target.id;  // change the bccolor in body
        // }
    })
})



```
## Project 2  solution
```Javascript
console.log("Project 2")


//  1 --> select the form -|> store the all data
const form = document.querySelector('form');
//  if innerHeight,weight are cal ouside the event then value is empty

// call event  -> submit for cal
form.addEventListener('submit',function(e){
    // prevent the default value of form
    e.preventDefault();

    // select the values of height , weight,results

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
   

    // check the valid values of height & weight

    if(height === '' || height < 0  || isNaN(height)){  // not a number
        results.innerHTML=`please Enter the valid height : ${height}`
    }
// weights
    else if(weight === '' || weight < 0  || isNaN(weight)){
        results.innerHTML=`please Enter the valid weight : ${weight}`
    }
// cal the BMI using the formula
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)  // 2 decimal points

        // shoe in result
        results.innerHTML =`<span> Result is : ${bmi} </span>`

        // apply case in message
      if(bmi < 18.6 ){
        message.innerHTML = "Given Person is : Under Weight"
      }
      else if(bmi >24.9){
        message.innerHTML = "Given Person is : Overweight "
      }
      else{
        message.innerHTML = "Given Person is : Normal Range "
      }
      }

});
```

## project 3   solution
```JavaScript

console.log("Project 3")

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
```

## Project 4 solution

``` JavaScript
console.log("Project 4")



// // select the random num 1 to 100
 
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}


// // right/ higher/lower
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {

    // set input disply empty 
    // add the value in guessSlot   // in arrr
    // incre numGuess
    // update remaining attempt
    userInput.value = '';
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// lowOrHi
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {

    // clear the inpuit field
    // not enter the further value in input field
    //add classlist ion button
    // add paragraph
    // append para in stratOver 
    // playname= false
    // startNew Game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // cal again randNm
    // reset prevGuess arr
    // update the numGuess
    // empty gameSlot
    // update remain attempt
    // remove the disabled userInput
    // remove chaid p
    // palyGame = true;
    
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```



## project 5 Solution


``` JavaScript
console.log("Project 5")
 const insert = document.getElementById('insert');

// apply on whole window

window.addEventListener('keydown',(e) =>{
    insert.innerHTML=`
    <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table> 
    </div>`
})
```

## project 6 Solution
``` JavaScript
console.log("Project 6")

 
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

```