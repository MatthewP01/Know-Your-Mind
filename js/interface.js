const currentDisplay = document.querySelector('#current-display')
const sideBar = document.querySelector('.sidebar')

currentDisplay.addEventListener('click', function(e){
  if (e.target.className === "node"){
    nodeId = e.target.dataset.id
    fetchNodeData(nodeId)
    .then(data => {
      createSidebar(data)
    })
  }
})

function fetchNodeData(nodeId){
  return fetch(`http://localhost:3000/regions/${nodeId}`)
  .then(res => res.json())
}

function createSidebar(promise){
  sideBar.innerHTML =
  `<div id="mySidenav" class="sidenav">
    <p><u>Anatomical Feature:</u> <br><strong>${promise.name}</strong></p>
    <p><u>Function:</u><br><strong>${promise.description}</strong></p>
    <p><u>Conditions Associated with the ${promise.name}:</u> <strong>${promise.conditions}</strong></p>
    <p class="close-button"><i class="far fa-times-circle"></i></p>
  </div>`
}

// Close description upon click
sideBar.addEventListener('click', function(e){
  if (e.target.tagName === "I"){
    sideBar.innerHTML = ""
  }
})
