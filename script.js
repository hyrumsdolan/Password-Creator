// Assignment code here
document.getElementById('generate').addEventListener('click', function() {
  // Get the textarea element by its ID
  const textarea = document.getElementById('password');
  
  // Set the value of the textarea
  textarea.value = 'Hello, world!';
});


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
