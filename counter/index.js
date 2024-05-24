
let countBtn = document.getElementById("countBtn") //counter button 
let numbersEntered = document.getElementById("numbers") //to hold the numbers input
let saveBtn = document.getElementById("saveBtn")  //button to save inputs 
let numbersSaved = document.getElementById("numbersSaved") //numbersSaved button to display the entries
const clearBtn = document.getElementById("clearBtn") //Clears all entries
let counter = 0; //counter to keep track of counts. 
let savedNumbers = [] //Array to hold and store inputs



countBtn.addEventListener("click", ()=>{
    counter++
    numbersEntered.textContent = counter
    

})

clearBtn.addEventListener("click", () =>{

    numbersEntered.textContent = 0
    
    numbersSaved.textContent = ""
    counter = 0
    savedNumbers = []
})

saveBtn.addEventListener("click", () =>{
   

   
    savedNumbers.push(counter)
    numbersSaved.textContent = `[${savedNumbers.join(", ")}]`;

   
})