const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInput();
})

function checkInput() {
    //get the value from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username can not be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }
    if(emailValue===''){
        setErrorFor(email, 'email can not be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid');

    } else{
        setSuccessFor(email);
    }
    if(passwordValue === ''){
        setErrorFor(password, 'Password can not be blank');
    
    } 
     else {
        //add success class
        setSuccessFor(password);

    }
    if(password2Value === ''){
        setErrorFor(password2, 'Password2 can not be blank');

    } else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Passwords can not be blank')

    }
    else {
        //add success class
        setSuccessFor(password2);

}
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // form-control
    const small = formControl.querrySelector('small');
   
    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className ='form-control error';

    
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className ='form-control success';

}
 
function isEmail(email){
    return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/.test(email);
}
