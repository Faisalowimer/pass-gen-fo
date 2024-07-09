const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("gen-el1")
let passTwo = document.getElementById("gen-el2")
let passwordLength = 16

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPass() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
  
    }
    return randomPassword  
}

function generatePass() {
    passOne.textContent = generateRandomPass()
    passTwo.textContent = generateRandomPass()
    
}

// Function to reset the passwords
function resetPasswords() {
    passOne.textContent = "";
    passTwo.textContent = "";
}


