// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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

function generatePassword() {
  var password = "";
  var result = 0;
  var pwlenght = prompt ("How many characters does the password needs to have?");

while (pwlenght < 8 || pwlenght >128) {
  pwlenght = prompt ("Please select a range between 8 and 128 characters");
};

var finaloptions = "";

var upperCase = confirm ("Would you like it to have upper case?"); 
if (upperCase) {password += generateRandomUpper();
  finaloptions += "QWERTYUIOPASDFGHJKLÑZXCVBNM";
}
var lowerCase = confirm ("Would you like it to have lower case?");
if (lowerCase) {password += generateRandomLower();
  finaloptions += "qwertyuiopasdfghjklñzxcvbnm";
}
var numbers = confirm ("Would you like it to have numbers");
if (numbers) {password += generateRandomNumber();
  finaloptions += "123456789";
}
var symbols = confirm ("Would you like it to have simbols?");
if (symbols) {password += generateRandomSymbol();
  finaloptions += "!·$%&/()=?¿";
}

console.log (password);
for (var i = password.length ; i < pwlenght ; i++) {
  password += finaloptions [Math.floor(Math.random() * finaloptions.length)]
}
return password;
};
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);


// This was my first attempt to make the homework, the code works and can be used, but my Tutor helped me to make it more simple adding the "for";
 // while ( result < pwlenght) {
   // if (upperCase) {password += generateRandomUpper(); 
    //result++;
    //};
    //if (lowerCase) {password += generateRandomLower();
    //result++;
  //};
    //if (numbers) {password += generateRandomNumber();
    //result++;
    //};
    //if (symbols) {password += generateRandomSymbol();
    //result++;
    //};
  //}
  //const finalpassword = password.slice(0, pwlenght);
  //return finalpassword



// This was some code I used to create different passwords just by clicking the bottom, but my Tutor told me that the assigment was to make the survey to the
// user, in case they wanted to make a different password, changing the variables. But the code works and can be used in case is needed.


  //generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

// Add event listener to generate button
//document.getElementById('password').innerText = ("Your password is " + writePassword())

//document.getElementById('generate').addEventListener( 'click', () => {
  //writePassword()
  //console.log (writePassword())
//});

//document.getElementById('generate').addEventListener( 'click', () => {
  //document.getElementById('password').innerText = ("Your password is " + writePassword())
//});

//console.log (writePassword());



// Get references to the #generate element
// Write password to the #password input