import { getLetters } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if(click.target.id.startsWith("letter--")) {
//         const [] = click.target.id.split("--")
//     }
// })
const authors = getAuthors()
const recipients = getRecipients()


const buildLetterItems = (letter) => {

    const foundAuthor = authors.find(
        (author) => {
            return author.authorId === letter.author
        }
    )

    const foundRecipient = recipients.find(
        (recipient) => {
            return recipient.recipientId === letter.recipient
        }
    )

    const AuthorName = foundAuthor()
    

}

// export const Letters = () => {
//     const authors = getAuthors()
//     const recipients = getRecipients()
//     const letters = getLetters()
// }
