// Assignment Code
var generateBtn = document.querySelector("#generate");


// function to generate the random number from the upper bound given in argument
// for example: upper bound is 5, it will generate a number from 0-5.
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
  var passwordArray = [];
  var masterChars = "";


  // the following do two things:
  // 1.  whichever type of characters to include, generate a Random char of that type and store to array
  // 2.  add the possible characters to the large masterChars String
  if (argIncludeLowercase){
    char = lowercaseChars[getRandomNumber(lowercaseChars.length - 1)]
    passwordArray.push(char);
    masterChars += lowercaseChars;
  } 
  if (argIncludeUppercase){
    char = uppercaseChars[getRandomNumber(uppercaseChars.length - 1)]
    passwordArray.push(char);
    masterChars += uppercaseChars;
  } 
  if (argIncludeNumeric){
    char = numericChars[getRandomNumber(numericChars.length - 1)]
    passwordArray.push(char);
    masterChars += numericChars;
  } 
  if (argIncludeSpecial){
    char = specialChars[getRandomNumber(specialChars.length - 1)]
    passwordArray.push(char);
    masterChars += specialChars;
  } 
  //console.log(passwordArray)
  
  // append the remaining characters out
  for (var i = passwordArray.length; i < argLength; i++){
    char = masterChars[getRandomNumber(masterChars.length - 1)]
    passwordArray.push(char)
  }
  //console.log(passwordArray);

  // randomize the passwordArray to password String:
  for (var i = 0; i < argLength; i++){
    var index = getRandomNumber(passwordArray.length -1);
    password += passwordArray[index];
    passwordArray.splice(index, 1);
  }
  //console.log(password)

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
