//Validation process//
var fields={};
//linking all the fields to the fields object//
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
   })
//to check the field is not empty//
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}
//to check the email is valid//
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }
//main validation function to check the condition and colors the field red, if there is an error//
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
}
//a central function for checking the validity of our contact form by combining all the checks//
function isValid() {
    var valid = true;
 
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);

 return valid;
}
//preparing the constructor method that will take all the values for our User class//
class User {
    constructor(firstName, lastName, email, message) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.message = message;
    }
   }
//the main function we call from the HTML button on our Contact Form//
function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, message.value);
        alert(`${usr.firstName} thanks for messaging.`)
    } else {
        alert("There was an error")
    }
}


// add class navbarDark on navbar scroll //
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}