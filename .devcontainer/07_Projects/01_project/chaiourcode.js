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
