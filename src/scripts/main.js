import { fetchAuthors,fetchRecipients,fetchLetters } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    fetchAuthors().then(() =>{
        fetchRecipients().then(() =>{
            fetchLetters().then(() => {
            mainContainer.innerHTML = PenPal()
           
                
            })
            
        })

    })
   
}

renderHTML()