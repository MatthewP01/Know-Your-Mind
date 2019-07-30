const currentDisplay = document.querySelector('#current-display')
const sideBar = document.getElementById('mySidenav')
const body = document.querySelector('body')

currentDisplay.addEventListener('click', function(e){
  if (e.target.className === "fab fa-first-order-alt selector"){
    nodeId = e.target.dataset.id
    fetchNodeData(nodeId)
    .then(data => {
      createSidebar(data)
      sideBar.style.width = '250px';
    })
  }
})

// Close description upon click
sideBar.addEventListener('click', function(e){
  if (e.target.tagName === "I"){
    sideBar.innerHTML = ``
    sideBar.style.width = '0px';
  }
})

// FA awesome Icons are not within currentDisplay upon page loaded
// Modal with app info
body.addEventListener('click', function(e){
  if (e.target.id === "info-circle"){
    console.log('clicked')
  }
})

function fetchNodeData(nodeId){
  return fetch(`http://localhost:3000/regions/${nodeId}`)
  .then(res => res.json())
}

function createSidebar(promise){
  sideBar.innerHTML =
  `<p><u>Anatomical Feature:</u> <br><strong>${promise.name}</strong></p>
  <p><u>Function:</u><br><strong>${promise.description}</strong></p>
  <p><u>Conditions Associated with the ${promise.name}:</u> <strong>${promise.conditions}</strong></p>
  <p class="close-button"><i class="far fa-times-circle"></i></p>`
}
