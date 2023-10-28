// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Inputs
  var passwordLength = document.getElementById("passLength").value;
  var useLowercase = document.getElementById("lowercase").checked;
  var useUppercase = document.getElementById("uppercase").checked;
  var useNumeric = document.getElementById("numeric").checked;
  var useSpecial = document.getElementById("special").checked;

  //Possible Characters
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specialChars = "!@#$%^&*()-=_+[]{}|;:',.<>?/";

  //Empty Strings
  var charOptions = "";
  var password = "";

  //Add Options
  if (useLowercase) charOptions += lowerChars;
  if (useUppercase) charOptions += upperChars;
  if (useNumeric) charOptions += numChars;
  if (useSpecial) charOptions += specialChars;


  //Alert Check
  if (charOptions === "") {
    alert("Please select at least one character type.");
    return "";
  }

  if (passwordLength < 8 ||  passwordLength > 128) {
    alert("Please select a number between 8-128 (inclusive)");
    return "";
  }
  console.log(charOptions)
  console.log(passwordLength)


    //Generate Password
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * charOptions.length);
      password += charOptions[randomIndex];
    }

    return password

  }


// Write password to the #password input
function writePassword() {
 



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Copy to Clipboard
var copyBtn = document.querySelector("#copyBtn");

function copyToClipboard() {
    var passwordText = document.querySelector("#password");
    
    // Select the text
    passwordText.select();
    passwordText.setSelectionRange(0, 99999); // For mobile devices

    // Execute copy command
    document.execCommand("copy");
    
    // Deselect text (optional)
    passwordText.blur();
}

// Attach event listener
copyBtn.addEventListener("click", copyToClipboard);
