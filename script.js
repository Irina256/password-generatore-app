// Assignment code here
var symbol = "!@#$%^&*(){}[]=<>/,.";
var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allChars;


var password ="";
var length;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var appendRemaining = function() {
    if (password.length < length) {
        for (var i = password.length; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
    }
};

var generatePassword = function () {


    var passwordLength = window.prompt("How many characters would you like your password to be?");
    length = passwordLength;
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Length must be 8-128 characters");
        return generatePassword();
    }

    var uppercase = window.confirm("Would you like to use uppercase letters?");
    if (uppercase) {
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        allChars += upperCase
    }

    var lowercase = window.confirm("Would you like to use lowercase letters?");
    if (lowercase) {
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        allChars += lowerCase;
    }
    var num = window.confirm("Would you like to use numbers?");
    if (num) {
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        allChars += numbers;
    }
    var char = window.confirm("Would you like to use symbols?");
    if (char) {
        password += symbol.charAt(Math.floor(Math.random() * symbol.length));
        allChars += symbol;
    }
          
    if(!lowercase && !uppercase && !num && !char) {
        window.alert("At least one must be selected. Start over");
        return generatePassword();
    }

    appendRemaining();

    return password;
};