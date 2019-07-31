const buttonNav = document.querySelector(".button-navigation")

buttonNav.addEventListener('click', function(e){
  if (e.target.id === "study-btn"){
    // document.querySelector("body").style.backgroundImage = "url('https://media.istockphoto.com/photos/low-poly-black-background-picture-id595734386?k=6&m=595734386&s=612x612&w=0&h=bGa3M_kVFLZXag5SBSteWwkQrVv-wY7aeo6L_tOQ8kQ=');"
    currentDisplay.innerHTML =
    `<img src="http://pluspng.com/img-png/png-lined-paper-lined-paper-clip-art-at-clker-com-vector-clip-art-online-royalty-free-public-domain-600.png" style="background-color: white;">`
    // `<form>
    //   <input type="text"></input>
    //   <input type="submit"></input>
    // </form>`
  }
})
