// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var pwlenght = prompt ("How many characters does the password needs to have?");

while (pwlenght < 8 || pwlenght >128) {
  pwlenght = prompt ("Please select a range between 8 and 128 characters");
};

var upperCase = confirm ("Would you like it to have upper case?");
var lowerCase = confirm ("Would you like it to have lower case?");
var numbers = confirm ("Would you like it to have numbers");
var symbols = confirm ("Would you like it to have simbols?")

function generateRandomLower () {
const lowerLetters = "qwertyuiopasdfghjklñzxcvbnm"
return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function generateRandomUpper () {
const upperLetters = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function generateRandomSymbol () {
const SymbolsSelect = "!·$%&/()=?¿"
return SymbolsSelect[Math.floor(Math.random() * SymbolsSelect.length)]
}

function generateRandomNumber () {
const number = "123456789"
return number[Math.floor(Math.random() * number.length)]
}

function writePassword() {
  var password = "";
  var result = 0;
  while ( result < pwlenght) {
    if (upperCase) {password += generateRandomUpper(); 
    result++;
    };
    if (lowerCase) {password += generateRandomLower();
    result++;
  };
    if (numbers) {password += generateRandomNumber();
    result++;
    };
    if (symbols) {password += generateRandomSymbol();
    result++;
    };
  }
  const finalpassword = password.slice(0, pwlenght);
  return finalpassword
};

  //generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

// Add event listener to generate button
document.getElementById('password').innerText = ("Your password is " + writePassword())

document.getElementById('generate').addEventListener( 'click', () => {
  writePassword()
  console.log (writePassword())
});

document.getElementById('generate').addEventListener( 'click', () => {
  document.getElementById('password').innerText = ("Your password is " + writePassword())
});

console.log (writePassword());
