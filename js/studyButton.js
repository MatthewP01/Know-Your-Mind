const buttonNav = document.querySelector(".button-navigation")
const mainPage = document.querySelector(".main-page")
const studyCard = document.querySelector(".study-card-here")


buttonNav.addEventListener('click', function(e){
  if (e.target.id === "study-btn"){
    mainPage.innerHTML = ""
    body.style.background = 'black';

    // Create form on page and append
    const form = document.createElement('form')
    const selector = document.createElement('select')
    mainPage.appendChild(form)
    form.appendChild(selector)

    fetchData().then(data => {
      for(let i = 0; i < data.length; i++){
        selector.innerHTML += `<option value="${data[i].id}">${data[i].name}
        </option>`
      }
      form.innerHTML += `<input type="submit"></input>`
    })

    // Show an example study card for the user
    createStudyCard("Key Term", "Definition")

    const card = document.querySelector('.card')
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped');
    });
  }
})

document.addEventListener('submit', function(e){
  e.preventDefault()

  // Extract region id from the selected option tag
  const regionId = e.target.children[0].value
  // const definition = e.target.children[1].value

  fetchRegionData(regionId).then(data => {
    let description = data.description
    let conditions = data.conditions
    let location = data.location

    let details =
    `<p><u>Description:</u> ${description}</p>
    <p><u>Location:</u> ${location}</p>
    <p><u>Conditions:</u> ${conditions}</p>`

    createStudyCard(data.name, details)

    const card = document.querySelector('.card')
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped');
    });
  })

  const card = document.querySelector('.card')
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
})

function createStudyCard(term, definition){
  studyCard.innerHTML = `
  <div class="scene scene--card">
    <div class="card">
      <div class="card__face card__face--front">${term}</div>
        <div class="card__face card__face--back">${definition}</div>
      </div>
    </div>`
}
