const buttonNav = document.querySelector(".button-navigation")
const mainPage = document.querySelector(".main-page")
const studyCard = document.querySelector(".study-card-here")
const form = document.createElement('form')
const par = document.createElement('p')

document.querySelector('.study-card-here')

buttonNav.addEventListener('click', function(e){
  if (e.target.id === "study-btn"){
    mainPage.innerHTML = ""
    document.body.style.backgroundImage = "url('http://www.sclance.com/backgrounds/modern-background-black-and-white/modern-background-black-and-white_1537963.jpg')";

    // Add some text
    par.className = "create-your-own"
    mainPage.appendChild(par)
    par.innerText = "Choose a region to generate a study card!"

    // Append form on to page
    form.className = "region-form"
    const selector = document.createElement('select')
    mainPage.appendChild(form)
    form.appendChild(selector)

    fetchData().then(data => {
      for(let i = 0; i < data.length; i++){
        selector.innerHTML += `<option value="${data[i].id}" class = "box">${data[i].name}
        </option>`
      }
      form.innerHTML += `<br><input type="submit" class = "submit-btn lobe-button submission" value="Create Card!"></input>`
    })

    // Show an example study card for the user
    createStudyCard("Anatomical Region", "Definition")
  }
})

mainPage.addEventListener('submit', function(e){
  e.preventDefault()

  // Extract region id from the selected option tag
  const regionId = e.target.children[0].value

  // Fetch the region's data
  fetchRegionData(regionId).then(data => {
    let description = data.description
    let conditions = data.conditions
    let location = data.location

    let details =
    `<p><u>Description:</u> <br>${description}</p>
    <p><u>Location:</u> <br>${location}</p>
    <p><u>Conditions:</u> <br>${conditions}</p>`

    createStudyCard(data.name, details)
  })
})

function createStudyCard(term, definition){
  studyCard.innerHTML = `
  <div class="scene scene--card">
    <div class="card">
      <div class="card__face card__face--front"><p class = "term"><u>Key Term:</u> <br><br>${term}</p></div>
        <div class="card__face card__face--back">${definition}</div>
      </div>
    </div>`
    const card = document.querySelector('.card')
    card.addEventListener('click', function() {
      card.classList.toggle('is-flipped');
    });
}
