// Assignment Code
var generateBtn = document.querySelector("#generate");



function getRandomNumber(upbound) {
  return Math.floor(Math.random() * (upbound + 1));
}


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

  if (!argIncludeLowercase && !argIncludeUppercase && !argIncludeNumeric && !argIncludeSpecial) {
    alert("At least one character type must be selected.");
    return "";
  }

  // all conditions have passed
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-=_+[]{}|;':\",./<>?`~\\";
  var password = "";
  var masterChars = "";

  if (argIncludeLowercase){
    masterChars += lowercaseChars;
  } 
  if (argIncludeUppercase){
    masterChars += uppercaseChars;
  } 
  if (argIncludeNumeric){
    masterChars += numericChars;
  } 
  if (argIncludeSpecial){
    masterChars += specialChars;
  } 

  for (var i = 0; i < argLength; i++) {
    password += masterChars[getRandomNumber(masterChars.length - 1)];
  }
  
  //return "abcdef";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
