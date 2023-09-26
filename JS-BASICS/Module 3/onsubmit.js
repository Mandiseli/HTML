var name = document.getElementById("name").value;
var name = document.getElementById("name").value;
var name = document.getElementById("name").value;
var name = document.getElementById("name").value;
var emailing = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}$/;

if (name != '' && email != '' && contact != '') {
    if (email.match(emailReg)) {
        if(document.getElementById('name').checked || document.getElementById('female'.checked)) {
            if (contact.length == 10) {
                alert('All type of validation has done on OnSubmit event');
                return true;
            }
        } else {
            alert('The contact number must be atleast 10 digits long')
            return false;

        }
    } else {
        alert('You must select gender...');
        return false;
    }
} else {
    alert('All strings are required');
    return false
}
