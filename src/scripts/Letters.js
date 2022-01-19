import { getLetters } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

export const LetterInfo = (letter) => {
    const authors = getAuthors()
    const recipients = getRecipients()

    const foundAuthor = authors.find(
        (author) => {
            return author.id === letter.author 
        }
    )

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.id === letter.recipient
        }
    )
        var today = new Date();
        var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

        return `<p>Dear ${foundAuthor.name} (${foundAuthor.email}),</p>
               <p>${letter.letter}</p>
               <p>Sincerely, ${foundRecipient.name} (${foundRecipient.email})</p>
               <p>Sent on ${date}</p>
               <p>${letter.topic}</p>
        `
      
            

}

export const Letters = () => {
const letters = getLetters()
    let html = "<ul>"

    const listItems = letters.map(LetterInfo)
    html += listItems.join("")

    html += "</ul>"

    return html
}

