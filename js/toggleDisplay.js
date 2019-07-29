document.addEventListener("DOMContentLoaded", function(){


  const currentDisplay = document.querySelector('#current-display')
  const selectionField = document.querySelector('select')

  selectionField.addEventListener('change', function(e){

    if (e.target.value === "whole") {
      // document.location.reload()
      currentDisplay.innerHTML =
      `<canvas id="c"></canvas>`
      main()
    }

    else if (e.target.value === "coronal") {
      // Render coronal view to page
      currentDisplay.innerHTML =
      `<img src = "assets/coronal_slice.png" id="coronal">`

      // Fetch nodes from API
      fetchData().then(data => {
        for (let i = 0; i < data.length; i++){
          console.log(data[i].position_top)
          currentDisplay.innerHTML +=
          `<img src= "assets/node_icon_burned.png" data-id = ${data[i].id} class="node" style="position:
          fixed;top:${data[i].position_top}%;left:${data[i].position_left}%;
          width:1.5%" >`
        }
      })
      // console.log('clicked')

      // <img src= "assets/node_icon_burned.png" class = "node" id="basal-ganglia">
      // <img src= "assets/node_icon_burned.png" class = "node" id="corpus-collosum">
      // <img src= "assets/node_icon_burned.png" class = "node" id="amygdala">
      // <img src= "assets/node_icon_burned.png" class = "node" id="gyrus">

    }


    else if (e.target.value === "sagittal"){
      currentDisplay.innerHTML =
      `<img src = "assets/saggital_slice.png" id="sagittal">
      <img src= "assets/node_icon_burned.png" class = "node" id="cerebellum">
      <img src= "assets/node_icon_burned.png" class = "node" id="thalamus">
      <img src= "assets/node_icon_burned.png" class = "node" id="pituitary">
      <img src= "assets/node_icon_burned.png" class = "node" id="motor-cortex">
      <img src= "assets/node_icon_burned.png" class = "node" id="hypothalamus">
      <img src= "assets/node_icon_burned.png" class = "node" id="brain-stem">
      <img src= "assets/node_icon_burned.png" class = "node" id="cingulate-gyrus">`
    }
  })

})

function fetchData(){
  return fetch("http://localhost:3000/regions")
  .then(res => res.json())
}
