// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

    // Assignment Code
// Create prompts for when the button is clicked: 
var generateBtn = document.querySelector("#generate");

// prompted for the length of the password at least 8 characters and no more than 128 characters
var userPasswordSize = prompt("Choose a password length between 8 - 128 characters");
var userLoCase = confirm("Would you like to use lower case letters?");
var userUpCase = confirm("Would you like to use upper case letters?");
var userSpecial = confirm("Would you like to use special characters?");
// prompted for character types to include in the password: lowercase, uppercase, numeric, and/or special characters

// Validate the imput


    // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  // passwordText.value = password;
  // var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // var specialCharacter = [" ", "!", "", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", "^", "`", "{", "|", "}", "~", "]", "_"]
  
//password is generated that matches the selected criteria

// password is either displayed in an alert or written to the page

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

