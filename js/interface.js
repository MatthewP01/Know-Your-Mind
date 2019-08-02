const currentDisplay = document.querySelector('#current-display')
const sideBar = document.getElementById('mySidenav')
const body = document.querySelector('body')

// On click of node, display info about region on side-bar
currentDisplay.addEventListener('click', function(e){
  if (e.target.className === "fab fa-first-order-alt selector"){
    regionId = e.target.dataset.id
    fetchRegionData(regionId)
    .then(data => {
      createSidebar(data)
      onClick(e.target)
      // Change id of target to allow for target styling
      e.target.id = 'selected'
    })
  }
  else if (e.target.className === "lobe-button"){
    onClick()
    createLobeSideBar()
  }
})

// Close description upon click
sideBar.addEventListener('click', function(e){
  if (e.target.className === "far fa-times-circle node-x"){
    pressX(e.target)
  }
  else if (e.target.className === "far fa-times-circle lobe-x") {
    pressXLobe()
  }
})

// Just for fun
body.addEventListener('click', function(e){
  if (e.target.id === "info-circle"){
    document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
  else if (e.target.id === "brain-icon"){
    document.location.href = 'https://neuroscience.yale.edu/';
  }
})

function fetchRegionData(regionId){
  return fetch(`http://localhost:3000/regions/${regionId}`)
  .then(res => res.json())
}

// Create the side-bar using the text provided from the fetch
function createSidebar(promise){
  sideBar.innerHTML =
  `<p class="info-text"><u>Anatomical Feature:</u><br><b class = "anatomical-feature">${promise.name}</b></p>
  <p class='info-text'><u>Function:</u><br><strong>${promise.description}</strong></p>
  <p class='info-text'><u>Conditions Associated with the ${promise.name}:</u> <strong>${promise.conditions}</strong></p>
  <p class="close-button"><i class="far fa-times-circle node-x"></i></p>`
}

// Sidebar function results in opacity
function onClick(targetNode){
  sideBar.style.width = '250px';
  body.querySelector('.box').style.opacity = 0.3;
  body.querySelector('.text-effect').style.opacity = 0.3;
  body.querySelector('.icons').style.opacity = 0.3;
  currentDisplay.style.opacity = 0.6;
  body.querySelector('.button-navigation').style.opacity = 0.3;
}

// When the user closes the sidebar
function pressXLobe(){
  sideBar.innerHTML = ``
  sideBar.style.width = '0px';
  body.querySelector('.box').style.opacity = 1;
  body.querySelector('.text-effect').style.opacity = 0.75;
  body.querySelector('.icons').style.opacity = 1;
  currentDisplay.style.opacity = 1;
  body.querySelector('.button-navigation').style.opacity = 1;

}

// Remove opacity when closing sidebar
function pressX(){
  sideBar.innerHTML = ``
  sideBar.style.width = '0px';
  body.querySelector('.box').style.opacity = 1;
  body.querySelector('.text-effect').style.opacity = 0.75;
  body.querySelector('.icons').style.opacity = 1;
  currentDisplay.style.opacity = 1;
  document.querySelector('#selected').id = '';
  body.querySelector('.button-navigation').style.opacity = 1;
}


// Information about the major lobes of the brain
function createLobeSideBar(){
  sideBar.innerHTML =
  `<p class="lobe-label" id="frontal-lobe"> <u>Frontal Lobe:</u> <br>

  <i class="lobe-info">
  The most recently
  evolved part of the bain involved in reasoning, motor skills, higher level cognition, and expressive language</i></p><br>


   <p class="lobe-label" id="temporal-lobe"> <u>Temporal Lobe:</u><br>

   <i class="lobe-info">
   The lobe at the base of the brain that is involved in processing sensory input into derived meanings,
   such as in the case of emotion, memory and language comprehension</i></p><br>


   <p class="lobe-label" id="occipital-lobe"> <u>Occipital Lobe:</u><br>

   <i class="lobe-info">
   In mammals, this lobe is the visual processing center of the brain and containing most
   of the anatomical region of the visual cortex, involved in visual decoding</i></p><br>


   <p class="lobe-label" id="parietal-lobe"> <u>Parietal Lobe:</u><br>

   <i class="lobe-info">
   This is the middle section of the brain and is associated with processing input from the five senses
   as well as proprioception - one's own sense of self</i></p><br>


   <p class="lobe-label" id="cerebellum"> <u>Cerebellum:</u><br>

   <i class="lobe-info">
   Involved in motor control and motor planning - in particular posture, equilibrium,
   and motor learning in humans</i></p><br>


  <p class="close-button"><i class="far fa-times-circle lobe-x"></i></p>`
  currentDisplay.style.opacity = 1;
}
