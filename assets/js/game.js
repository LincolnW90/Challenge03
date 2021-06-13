// characters for each variable
var charslower = "abcdefghijklmnopqrstuvwxyz";
var charsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsnumbers = "0123456789";
var charsspecial = "!@#$%^&*()=+,./<>?-_=+";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    // generate Password criteria
     function generatePassword() {
      // password length
      var passwordLength = prompt("How long do you need your password to be? (8-128 characters)");
      // check password length
      if(passwordLength <8 || passwordLength > 128){
      alert("You must enter an integer between 8-128");
      writePassword();
      } else {
      console.log("password length = " + passwordLength);
      }

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

      // create character pool
      var characterpool = "";
      console.log("should be empty: " + characterpool);
      // checking boolean to add characters
      if(lowercase === true){
        characterpool = characterpool + charslower;
      } else {characterpool=characterpool};
      if(uppercase === true){
        characterpool = characterpool + charsupper;
      } else {characterpool=characterpool};
      if(numbers === true){
        characterpool = characterpool + charsnumbers;
      } else {characterpool=characterpool};
      if(special === true){
        characterpool = characterpool + charsspecial;
      } else {characterpool=characterpool};

      console.log("password pool: " + characterpool);

      // define password string
      // begin generating characters
      for(i=1; i<=passwordLength; i++){
        
      };

    };
    // end generatePassword function


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);