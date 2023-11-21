// Inputs:
const userName = document.getElementById('user-name')
const collageName = document.getElementById('collage-name')
const myLocation = document.getElementById('location-name')
const form = document.getElementById('myForm')


// Outputs:
const cardUserName = document.getElementById('card-name')
const cardCollage = document.getElementById('card-collage')
const cardLocation = document.getElementById('card-location')
const myCard = document.getElementById('output')

function generateCard(e) {
  e.preventDefault()
  cardUserName.innerText = `Name: ${userName.value}`
  cardCollage.innerText = `Collage Name: ${collageName.value}`
  cardLocation.innerText = `Location: ${myLocation.value}`
  myCard.style.display = 'block'
}

form.addEventListener('submit', generateCard)
