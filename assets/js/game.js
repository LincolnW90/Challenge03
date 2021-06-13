// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // password length
  var passwordLength = prompt("How long do you need your password to be? (8-128 characters)");
  console.log("password length = " + passwordLength);
  // include lower case?
  var lowercase = confirm("Include lower-case letters?");
  console.log("includes lower-case: " + lowercase);
  // include upper case?
  var uppercase = confirm("Include upper-case letters?");
  console.log("includes upper-case: " + uppercase);
  // include numbers?
  var numbers = confirm("Include numbers?");
  console.log("Includes numbers: " + numbers);
  // include special characters?
  var special = confirm("Include special characters?");
  console.log("Includes special chars: " + special);




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);