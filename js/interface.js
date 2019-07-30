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
    })
  }
})

// Close description upon click
sideBar.addEventListener('click', function(e){
  if (e.target.tagName === "I"){
    pressX(e.target)
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
  `<p><u>Anatomical Feature:</u> <br><strong>${promise.name}</strong></p>
  <p><u>Function:</u><br><strong>${promise.description}</strong></p>
  <p><u>Conditions Associated with the ${promise.name}:</u> <strong>${promise.conditions}</strong></p>
  <p class="close-button"><i class="far fa-times-circle"></i></p>`
}

// Sidebar function results in opacity
function onClick(targetNode){
  sideBar.style.width = '250px';
  body.querySelector('.box').style.opacity = 0.3;
  body.querySelector('.text-effect').style.opacity = 0.3;
  body.querySelector('.icons').style.opacity = 0.3;
  // currentDisplay.querySelector('.fab fa-first-order-alt selector').style.color = 'yellow';
  targetNode.id = 'selected'
  currentDisplay.style.opacity = 0.6;
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
