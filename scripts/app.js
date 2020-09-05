//your code here
fetch('https://telephone-assessment.herokuapp.com/api/v1/contacts')
    .then(response => response.json())
    .then(renderData)

const characterList = document.querySelector('#characters')

function renderData(hash) {
    console.log(hash)
    const characters = hash.data
    characters.forEach(character => {
        const charCard = document.createElement('li')
        const image = document.createElement('img')
        const nameNumber = document.createElement('span')
        const message = document.createElement('p')
        const contact = document.createElement('a')

        image.src = character.imageURL
        nameNumber.innerHTML = `${character.name} ${character.phone}`
        message.innerText = character.message
        contact.innerHTML = `<a href=contact.html?=${character.name}>Leave ${character.name} a message</a>`

        characterList.appendChild(charCard)
        charCard.append(image, nameNumber, message, contact)


    })
}