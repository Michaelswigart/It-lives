  // Assignment Code 
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");
  // True or false var and function
  
  
 var upperCaseIncuded = false
 var lowerCaseIncuded = false
 var numbersIncuded = false
 var symbolsIncuded = false
 var passwordLength =""
 var password =""
console.log("part one work's")
function resetPassword() {
 upperCaseIncuded = false;
lowerCaseIncuded = false;
numbersIncuded = false;
symbolsIncuded = false;
numbersIncuded = false;
passwordLength ="";
password ="";
 writePassword()
 console.log("part two work's ")
};
 //Requirement's for password generator
function writePassword() {
while (passwordLength < 8 || passwordLength >128);
 upperCaseIncuded = confirm("Do you want to include upper case")

 lowerCaseIncuded = confirm("Do you want to include lower case")

 numbersIncuded = confirm("Do you want to include numbers")

 symbolsIncuded = confirm("Do you want to include symbols")
   console.log("part three work's")
 if( upperCaseIncuded === false &&
   lowerCaseIncuded === false  &&
   numbersIncuded === false  &&
   symbolsIncuded === false ){
    
     alert("Need to pick something")
     resetPassword()
   }

 }
  console.log("part four work's")
 var criteria = []; {
  var upperCaseArray =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
  var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|', '~'];
  var passwordString = "";
   var count = 0;
 }
  console.log("part five work's")
 
  if(upperCaseIncuded){ criteria.push(...uppercaseArray);
  passwordString += criteria[Math.floor(Math.random() * uppercaseArray.length)];
  count++;
 }
   if (lowercaseIncuded){
   criteria.push(...lowercaseArray);
   passwordString += criteria[Math.floor(Math.random() * lowercaseArray.length)];
   count++;

 } 
   if (numbersIncuded) { criteria.push(...numbersArray);
     passwordString += criteria[Math.floor(Math.random() * numbersArray.length)];
  count++;
  
   }

   if (symbolsIncuded) { criteria.push(...symbolsArray);
     passwordString += criteria[Math.floor(Math.random() * symbolsArray.length)];
     count++;
     }
   console.log("part six work's")
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
   console.log("part seven work's")
  function generatePassword() {
    for (i = 0; i < passwordLength - count; i++) {
      var randomCharacter = Math.floor(Math.random() * criteria.length);
      passwordString += criteria[randomCharacter];
    }
    return passwordString;
  }
 generateBtn.addEventListener("click", writePassword);
