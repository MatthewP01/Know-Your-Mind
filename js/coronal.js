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
      // console.log('clicked')
      currentDisplay.innerHTML =
      `<img src = "assets/coronal_slice.png" id="coronal">

      <div id="tooltip">
      <img src= "assets/node_icon_burned.png" id="basal-ganglia">
      </div>
      `

      const nodePress = document.querySelector('#basal-ganglia')
      const sideBar = document.querySelector('#sidebar')

      nodePress.addEventListener('click', function(e){
        sideBar.innerHTML +=
        `<div class="wrapper">
        <!-- Sidebar -->
        <nav id="side-bar">
            <div class="sidebar-header">
                <h3>The Basal Ganglia!</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Info will go here!</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

        </nav>
        <!-- Page Content -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>
            </nav>
        </div>
    </div>`

    })

    }


    else if (e.target.value === "sagittal"){
      currentDisplay.innerHTML =
      `<img src = "assets/saggital_slice.png" id="sagittal">`
    }
  })

})
