  // Assignment Code // Write password to the #password input
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");


 var uppercaseIncuded = false
 var lowercaseIncuded = false
 var numbersIncuded = false
 var symbolsIncuded = false
 var numbersIncuded = false
 var passwordLength =""
 var password =""

 function resetPassword() {
  uppercaseIncuded = false;
 lowercaseIncuded = false;
 numbersIncuded = false;
 symbolsIncuded = false;
 numbersIncuded = false;
 passwordLength ="";
 password ="";
  writePassword()
};

 function writePassword() {

  uppercaseIncuded = confirm("Do you want to include upper case")

  lowercaseIncuded = confirm("Do you want to include lower case")

  numbersIncuded = confirm("Do you want to include numbers")

  symbolsIncuded = confirm("Do you want to include symbols")


  if( uppercaseIncuded === false &&
    lowercaseIncuded === false  &&
    numbersIncuded === false  &&
    symbolsIncuded === false && 
    numbersIncuded === false){
     
      alert("Need to pick something")
      resetPassword()
    }

  }

  var criteria = []; {
    
  }

//   var password = generatePassword();
  
//   passwordText.value = password;
// };
//    // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


//   // Password length
//  var passwordLength = prompt ("How many characters would you like your password to have?") 
//  if (passwordLength < 129) {
// ///???????
// }
//  else alert ("This password is too large. Must be under 129 characters.")
//  if (passwordLength > 7) {
// ///???????
// }
//  else alert ("This password is too short. Must be at least 8 characters.")
//    // Special Characters
//  var specialChar = confirm ("Would you like it to contain special characters?")
//   //Numbers
//  var numbers = confirm ("Would you like it to include numbers?")
//    //Uppercase
//  var uppercase = confirm ("Would you like it to include uppercase letters?")
//    //Lowercase
//  var lowercase = confirm ("Would you like it to include lowercase letters?")

//generate


/*it generatePassword pramters 

function reset(){}

function won't proced when enter 7 or lower

function won't proced when enter 129 or greater

function randomemiezPassword

function cancle specialChar


*/
