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
  var masterChars = "";
  var lowercaseCharsN = 0;
  var uppercaseCharsN = 0;
  var numericCharsN = 0;
  var specialCharsN = 0;

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

  // found the number of characters of each tyype in the password generated
  for (var i = 0; i < argLength; i++) {
    char = masterChars[getRandomNumber(masterChars.length - 1)]
    password += char;
    if (lowercaseChars.includes(char)){
      lowercaseCharsN++;
    }
    if (uppercaseChars.includes(char)){
      uppercaseCharsN++;
    }
    if (numericChars.includes(char)){
      numericCharsN++;
    }
    if (specialChars.includes(char)){
      specialCharsN++;
    }
  }
  
  // replacement character!
  // those console logs are debug messages
  //console.log(lowercaseCharsN);
  //console.log(uppercaseCharsN);
  //console.log(numericCharsN);
  //console.log(specialCharsN);
  var arrayA = [lowercaseCharsN, uppercaseCharsN, numericCharsN, specialCharsN];
  //console.log(arrayA);
  //console.log(Math.max(lowercaseCharsN, uppercaseCharsN, numericCharsN, specialCharsN)); 
  maxA = Math.max(lowercaseCharsN, uppercaseCharsN, numericCharsN, specialCharsN);
  //console.log(maxA);

  //var a = password.contains(specialChars);
  //console.log(a);
  /*password = "5^ti,vk1";
  lowercaseCharsN = 4;
  uppercaseCharsN = 0;
  numericCharsN = 1;
  specialCharsN = 3;
  for (var i = 0; i < password.length; i++) {
    if (lowercaseChars.indexOf(password[i]) !== -1) {
      // replace here
      console.log("herehere!!")
      console.log(i);
      var b = uppercaseChars[getRandomNumber(uppercaseChars.length - 1)]
      console.log(b);
      //password[i] = b;
      password = password.slice(0, i) + b + password.slice(i + 1);
      console.log(password[i]);
      console.log(password);
      break;
    }
  }    */

  // Replacement logics

  // if lower case needed but no lowercase generated
  if (argIncludeLowercase && lowercaseCharsN == 0){
    // replace the character with the most type of characters to replace with lowercase char
    // if uppercase characters are the maximum
    if (uppercaseCharsN === maxA){
      // find the character with uppercaseChars
      for (let i = 0; i < password.length; i++) {
        if (uppercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = lowercaseChars[getRandomNumber(lowercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      
    } else if (numericCharsN === maxA){
      // find the character with uppercaseChars
      for (let i = 0; i < password.length; i++) {
        if (numericChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = lowercaseChars[getRandomNumber(lowercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    } else if (specialCharsN == maxA) {
      for (let i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = lowercaseChars[getRandomNumber(lowercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }
    }
  }

  if (argIncludeUppercase && uppercaseCharsN == 0){
    // replace the character with the most type of character to replace with lowercase char

    if (lowercaseCharsN == maxA){
      // find the character with uppercaseChars
      for (let i = 0; i < password.length; i++) {
        if (lowercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = uppercaseChars[getRandomNumber(uppercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      
    } else if (numericCharsN == maxA){
      // find the character with uppercaseChars
      for (let i = 0; i < password.length; i++) {
        if (numericChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = uppercaseChars[getRandomNumber(uppercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      
    } else if (specialCharsN == maxA) {
      for (let i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = uppercaseChars[getRandomNumber(uppercaseChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    }
  }

  if (argIncludeNumeric && numericCharsN == 0){
    // replace the character with the most type of character to replace with lowercase char
    if (lowercaseCharsN === maxA){
      for (let i = 0; i < password.length; i++) {
        if (lowercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = numericChars[getRandomNumber(numericChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    } else if (uppercaseCharsN === maxA){
      for (let i = 0; i < password.length; i++) {
        if (uppercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = numericChars[getRandomNumber(numericChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    } else if (specialCharsN == maxA) {
      for (let i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = numericChars[getRandomNumber(numericChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    }
  }

  if (argIncludeSpecial && specialCharsN == 0){
    // replace the character with the most type of character to replace with lowercase char
    if (lowercaseCharsN === maxA){
      // find the character with uppercaseChars
      for (let i = 0; i < password.length; i++) {
        if (lowercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = specialChars[getRandomNumber(specialChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    } else if (uppercaseCharsN === maxA){
      for (let i = 0; i < password.length; i++) {
        if (uppercaseChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = specialChars[getRandomNumber(specialChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      

    } else if (numericCharsN == maxA) {
      for (let i = 0; i < password.length; i++) {
        if (numericChars.indexOf(password[i]) !== -1) {
          // replace here
          var b = specialChars[getRandomNumber(specialChars.length - 1)];
          password = password.slice(0, i) + b + password.slice(i + 1);
          break;
        }
      }      
    }
  }



  /*var lowercaseCharsN = 0;
  var uppercaseCharsN = 0;
  var numericCharsN = 0;
  var specialCharsN = 0;  
  for (var i = 0; i < argLength; i++) {
    if (lowercaseChars.includes(password[i])){
      lowercaseCharsN++;
    }
    if (uppercaseChars.includes(password[i])){
      uppercaseCharsN++;
    }
    if (numericChars.includes(password[i])){
      numericCharsN++;
    }
    if (specialChars.includes(password[i])){
      specialCharsN++;
    }
  }
  console.log(lowercaseCharsN);
  console.log(uppercaseCharsN);
  console.log(numericCharsN);
  console.log(specialCharsN);*/


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
