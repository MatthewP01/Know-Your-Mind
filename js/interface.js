const currentDisplay = document.querySelector('#current-display')
const sideBar = document.getElementById('mySidenav')
const body = document.querySelector('body')

currentDisplay.addEventListener('click', function(e){
  if (e.target.className === "fab fa-first-order-alt selector"){
    nodeId = e.target.dataset.id
    fetchNodeData(nodeId)
    .then(data => {
      createSidebar(data)
      onClick(e.target)
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

// FA awesome Icons are not within currentDisplay upon page loaded
// Modal with app info
body.addEventListener('click', function(e){
  if (e.target.id === "info-circle"){
    console.log('click')
    // currentDisplay.innerHTML +=
  }
})

function fetchNodeData(nodeId){
  return fetch(`http://localhost:3000/regions/${nodeId}`)
  .then(res => res.json())
}

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
  // currentDisplay.querySelector('.fab fa-first-order-alt selector').style.color = 'yellow';
  currentDisplay.style.opacity = 0.6;
}

function pressXLobe(){
  sideBar.innerHTML = ``
  sideBar.style.width = '0px';
  body.querySelector('.box').style.opacity = 1;
  body.querySelector('.text-effect').style.opacity = 0.75;
  body.querySelector('.icons').style.opacity = 1;
  currentDisplay.style.opacity = 1;
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
}

function createLobeSideBar(){
  sideBar.innerHTML =
  `<p class="lobe-label" id="frontal-lobe"> Frontal Lobe</p><br>
   <p class="lobe-label" id="temporal-lobe"> Temporal Lobe</p><br>
   <p class="lobe-label" id="occipital-lobe"> Occipital Lobe</p><br>
   <p class="lobe-label" id="parietal-lobe"> Parietal Lobe</p><br>
   <p class="lobe-label" id="cerebellum"> Cerebellum</p><br>
  <p class="close-button"><i class="far fa-times-circle lobe-x"></i></p>`
  currentDisplay.style.opacity = 1;
}
