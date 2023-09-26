const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();
})
const validateInputs = () =>{
    //Get the values from the input
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    
    if (nameValue === ''){
        setError(name, 'name is require');
    } else {
        setSuccess(name);
    }

    if (surnameValue === ''){
        setError(surname, 'surname is require');
    } else {
        setSuccess(surname);
    }

    if (emailValue ===''){
        setError(email, 'email is required');
    }
    else if (! isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address')
    } else{
        setSuccess(email);
    }
   
}

const setError = (element, text) =>{
    const inputControl = element.parentelement;
    const errorDisplay = inputControl.querrySelector('.error')

    errorDisplay.innertext = text;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const setSuccess = (element, text) =>{
    const inputControl = element.parentelement;
    const errorDisplay = inputControl.querrySelector('.error')

    errorDisplay.innertext = text;
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}
const isValidEmail = email =>{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
}

function changeTabColor(selectedTab) {
    // Get all list items in the navigation menu
    const navItems = document.querySelectorAll("#navMenu li");
  
    // Remove the "active" class from all list items
    navItems.forEach(function(navItem) {
      navItem.classList.remove("active");
    });
  
    // Add the "active" class to the selected list item
    selectedTab.parentNode.classList.add("active");
  }
  
