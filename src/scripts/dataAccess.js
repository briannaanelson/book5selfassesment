const applicationState ={
    authors:[],
    recipients:[],
    letters:[]

}

const API = "http://localhost:8088"

export const fetchAuthors = () => {
    return fetch (`${API}/authors`)
        .then(response => response.json())
        .then(
            (AuthorNames) => {
                applicationState.authors = AuthorNames
            }
        )

}

export const getAuthors = () => {
    return applicationState.authors.map(author =>({...author}))
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
        .then(response => response.json())
        .then(
            (RecipentNames) => {
                applicationState.recipients = RecipentNames
            }
        )

}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient =>({...recipient}))
}

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (FinalLetters) => {
                applicationState.letters= FinalLetters
            }
        )
}

export const getLetters = () =>{
    return applicationState.letters.map(letter =>({...letter}))
}


export const sendInfo = (userLetterInfo) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterInfo)
    }
    const mainContainer = document.querySelector("#container")

    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}