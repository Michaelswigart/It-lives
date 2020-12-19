  // Assignment Code 
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");
  // True or false var and function
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
  //Requirement's for password generator
 function writePassword() {
 while (passwordLength < 8 || passwordLength >128);
  uppercaseIncuded = confirm("Do you want to include upper case")

  lowercaseIncuded = confirm("Do you want to include lower case")

  numbersIncuded = confirm("Do you want to include numbers")

  symbolsIncuded = confirm("Do you want to include symbols")

  if( uppercaseIncuded === false &&
    lowercaseIncuded === false  &&
    numbersIncuded === false  &&
    symbolsIncuded === false ){
     
      alert("Need to pick something")
      resetPassword()
    }

  }
   
  var criteria = []; {
   var uppercaseArray =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 
   var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
   var symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '@', '^', '_', '|', '~'];
   var passwordString = "";
    var count = 0;
  }

  if(uppercaseIncuded){ criteria.push(...uppercaseArray);
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




 generateBtn.addEventListener("click", writePassword);

//   var password = generatePassword();
  
//   passwordText.value = password;
// };
//    // Add event listener to generate button
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
