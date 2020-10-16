// I leaned on a stackoverlow to get ideas on how to build the functions for this project, it can be found here - https://stackoverflow.com/questions/59904757/random-password-generator-javascript-not-returning-password/59904910#59904910

// Assignment Code, selects #generate from the HTML page
let generateBtn = document.querySelector("#generate");

// Write password function writes the #password to the input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate password button
generateBtn.addEventListener('click', writePassword)

// Function for the prompts that come up and make you choose the length and characters you want
function generatePassword() {
  let passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  let lowerCases = confirm("Do you want lowercases in your password?");

  let upperCases = confirm("Do you want uppercases in your password?");

  let numbers = confirm("Do you want numbers in your password?");

  let special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  let minimumCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  let minimumNumbers = "";
  let minimumLowerCases = "";
  let minimumUpperCases = "";
  let minimumSpecialCharacters = "";

// Special characters for the function created
let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // Generator functions
  let functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  let randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    let randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}