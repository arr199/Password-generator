

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("btn-el")
let password1 = document.getElementById("pass1-el")
let password2 = document.getElementById("pass2-el")

buttonEl.addEventListener("click",function(){
    
  
    password1.value= generatePasword()
    password2.value= generatePasword()
    
})



function generatePasword(){
    let password = ""
    for(let i = 0 ; i<15 ; i++){
    let number = Math.floor(Math.random()*90)
    password += characters[number]
    }
    return password
   
    
}