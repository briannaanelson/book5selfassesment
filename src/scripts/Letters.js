import { getLetters } from "./dataAccess.js"
import { getAuthors } from "./dataAccess.js"
import { getRecipients } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if(click.target.id.startsWith("letter--")) {
//         const [] = click.target.id.split("--")
//     }
// })

let authors = []
let recipients = []

const convertLetters = (letter) => {
    return `
    <li>
    ${letter.letter}
    `
}

export const Letters = () => {
    const authors = getAuthors()
    const recipients = getRecipients()
    const letters = getLetters()
let html = "<ul>"
const listItems = letters.map(convertLetters)
html +=listItems.join("")
html +="</ul>"
return html


}

// export const Letters = () => {
//     const authors = getAuthors()
//     const recipients = getRecipients()
//     const letters = getLetters()
// }
