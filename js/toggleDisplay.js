\document.addEventListener("DOMContentLoaded", function(){

  const currentDisplay = document.querySelector('#current-display')
  const selectionField = document.querySelector('select')

  document.querySelector('.text-effect').style.opacity = 0.7;

  selectionField.addEventListener('change', function(e){

    if (e.target.value === "whole") {

      currentDisplay.innerHTML = `
      <canvas id="c"></canvas>
      <p id ="instructions"><i>Drag Brain to view lobes</i></p>
      <button class = "lobe-button" type="button" name="button">What am I looking at?</button>`

      // Re-render 3D model on index.html from index.js

      main()
    }

    // Render coronal view to page with appropriate nodes
    else if (e.target.value === "coronal") {

      currentDisplay.innerHTML = `<img src = "assets/coronal_slice.png" id="coronal">`

      // Fetch nodes from API
      fetchData().then(data => {
        for (let i = 0; i < data.length; i++){
          console.log(data[i].position_top)
          if (data[i].view === "coronal"){
              renderNodes(data[i])
          }
        }
      })
    }

    // Render sagittal view with appropriate nodes
    else if (e.target.value === "sagittal"){

      currentDisplay.innerHTML = `<img src = "assets/saggital_slice.png" id="sagittal">`

      fetchData().then(data => {
        for (let i = 0; i < data.length; i++){
          if (data[i].view === "sagittal"){
            renderNodes(data[i])
          }
        }
      })
    }
  })
})

// Do fetch request
function fetchData(){
  return fetch("http://localhost:3000/regions")
  .then(res => res.json())
}

// Function to render nodes with appropriate data points
function renderNodes(dataInstance){
  currentDisplay.innerHTML +=
    `<i class="fab fa-first-order-alt selector" data-id = ${dataInstance.id} style="position:
    fixed;top:${dataInstance.position_top}%;left:${dataInstance.position_left}%;
    font-size: 1.5em; "></i>`
}
