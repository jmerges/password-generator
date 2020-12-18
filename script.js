// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Original code starts here:
//___________________________

// generate lower case alphabet array
var lowerCaseAlphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var upperCaseAlphabet = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];
var digits = [
  '0','1','2','3','4','5','6','7','8','9'
];
var specialCharacters = [
  ' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'
];

function isInt(str) {
  for (var i=0; i<str.length; i++) {
    if (str[i].isDigit()) {
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

function generatePassword() {

  var numCharacters;

  numCharacters = prompt("Enter a password length between 8 and 128");

  while (!numCharacters.isInt()) {
    alert("Please enter an integer between 8 and 128");
  
    if (Integer.parseInt(numCharacters) < 8 || numCharacters > 128) {
      alert("Password length must be between 8 and 128");
      continue;
    }
  }
  console.log(numCharacters);
}
generatePassword();