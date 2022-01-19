import { sendInfo } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

//get radio button value function


mainContainer.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id === "SendLetter"){
        //Get information that user selected/typed into fields
        const letterAuthor = document.getElementById('authors').value
        const userLetter = document.getElementById('FullLetter').value
        const letterTopic = document.querySelector('input[name="topic"]:checked').value
        const letterRecipient = document.getElementById('recipients').value
        //grab other information


        //make an object out of the user selections/input
        const dataToSendToAPI = {
            author: parseInt(letterAuthor),
            letter: userLetter,
            topic: letterTopic,
            recipient: parseInt(letterRecipient)
        }

        //send info to API for permanent storage
        sendInfo(dataToSendToAPI)


    }
})




let authors = []
let recipients =[]


export const LetterForm = () => {
    authors = getAuthors()
    recipients = getRecipients()
    let html = 
        `
        <label class="label" for="Author">Author</label>
        <select class="authors" id="authors">
        <option value="">Choose...</option>
        ${
            authors.map(
                author =>{
                    return `<option value="${author.id}">${author.name}</option>`
                }
            ).join("")
        }
        </select>
        <div class="field">
            <label class="label" for="FullLetter">Letter</label>
            <textarea id="FullLetter" name="letter">
            </textarea>
        </div>
        <div class="field">
            <label class="label" for="Topic">Topics</label>
        </div>
  <form name="form1">
        <div class="buttons">
            <input type="radio" name="topic" value="Buisness">Buisness
            <input type="radio" name="topic" value="Friendly">Friendly
            <input type="radio" name ="topic" value="Family">Family
            <input type="radio" name="topic" value="Congratulations">Congratulations
            <input type="radio" name="topic" value="Condolences">Condolences</br>
        </div>
      </form>
        <div class="dropdown">
            <label class="label" for="Recipient">Recipient</label>
            <select class="recipients" id="recipients">
        <option value="">Choose...</option>
        ${
            recipients.map(
               recipient =>{
                    return `<option value="${recipient.recipientId}">${recipient.name}</option>`
                }
            ).join("")
        }
        </select>
        </div>
        <div class ="button">
        <button class="button" id="SendLetter">Send Letter</button>
        </div>
    `
return html

}

