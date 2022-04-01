function generatePassword(){
  //TODO: your code goes here
  console.log("Hey! you Click the button")

// 1)Prompt the user for the password Criteria
  var userInput = prompt("Hi new User! I will Help you generate a new password. How long do you want your password to be?")
// converting user's input from a string into a number
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)){
    alert("STOP MESSING AROUND! Please try again and enter a NUMBER")
    return
  } 
//  a. Password length will be 8<128
  if (passwordLength < 8 || passwordLength > 128){
    alert("Your password need to be between 8 and 128 characters")
    return
  }
  // confirm with user that they will have how many characters in their password
  alert(`Your password will have ${passwordLength} characters`)
//  b. Lowercase, uppercase,number, special character

   var SymbolList = ["!","@","#","$","%","&"];
   var numberList = [0,1,2,3,4,5,6,7,8,9];
   var LowerCaseLetterList =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var UpperCaseLetterList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// 2) validate the user's input 

//  gather user preferences?
  var ConfirmUpper = confirm("Do you want to include capital letters in your password? Choose Ok for yes and Cancel for no");
  var ConfirmLower = confirm("Do you want to include lowercase letters in your password? Choose Ok for yes and Cancel for no");
  var ConfirmSymbol = confirm("Do you want to include special characters in your password? Choose Ok for yes and Cancel for no");
  var ConfirmNumber = confirm("Do you want to include number in your password? Choose Ok for yes and Cancel for no");
  //In case user doesn't follow the instructions above 
    while(ConfirmUpper===false && ConfirmLower===false && ConfirmSymbol===false && ConfirmNumber===false){
      alert("stop wasting my time! At least choose 1 parameter");
      var ConfirmUpper = confirm("Do you want to include capital letters in your password? Choose Ok for yes and Cancel for no");
      var ConfirmLower = confirm("Do you want to include lowercase letters in your password? Choose Ok for yes and Cancel for no");
      var ConfirmSymbol = confirm("Do you want to include special characters in your password? Choose Ok for yes and Cancel for no");
      var ConfirmNumber = confirm("Do you want to include number in your password? Choose Ok for yes and Cancel for no");
    } 


  var UserPreferences = []
  if (ConfirmUpper){
    var UserPreferences = UserPreferences.concat(UpperCaseLetterList)
  }
  if (ConfirmLower){
    var UserPreferences = UserPreferences.concat(LowerCaseLetterList)
  }
  if (ConfirmSymbol){
    var UserPreferences = UserPreferences.concat(SymbolList)
  }
  if (ConfirmNumber){
    var UserPreferences = UserPreferences.concat(numberList)
  }
console.log(UserPreferences)
// // 3)Generate the password based on criteria

   var generatePassword =[]

   for (var i=0; i<passwordLength; i++) {
     var x= Math.floor(Math.random()*UserPreferences.length);
     var generatePassword = generatePassword.concat(UserPreferences[x])
   }

// // 4)Display the password to the page
 return (generatePassword = generatePassword.join(""));

}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
