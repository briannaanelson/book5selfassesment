import { LetterForm } from "./LetterForm.js"
export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class ="LetterForm">
    ${LetterForm()}
    </section>
    
    <section class="AddedLetters">
    <h1>Letters</h1>
    
    </section>
    
    `
    //under "LetterForm" call LetterForm from letterform.js
    //under "AddedLetters" call Letters from Letters.js
    //create a click event that stores the selected author and 
    //the selected recipient info so that it can be later displayed 
    //in the letters section at the bottom of the page 
    //should I import the authors and recipients directly from the api?
    //instead of manually listing them?
    //click event should also store what ever was written in the letter section
    //of the letter form?




}