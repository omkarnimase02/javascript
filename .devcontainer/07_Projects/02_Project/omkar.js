
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
     <p>Overweight = Greater than 24.9</p>

});


