// Assignment Code
var generateBtn = document.querySelector("#generate");

// function generatePassword()
function generatePassword(){
  var argLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  while (isNaN(argLength) || argLength < 8 || argLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    argLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));          
  }

  var argIncludeLowercase = confirm("Include lowercase characters? OK to include, Cancel to exclude");
  var argIncludeUppercase = confirm("Include uppercase characters? OK to include, Cancel to exclude");
  var argIncludeNumeric = confirm("Include numeric characters? OK to include, Cancel to exclude");
  var argIncludeSpecial = confirm("Include special characters? OK to include, Cancel to exclude");



  



  return "abcdef";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
