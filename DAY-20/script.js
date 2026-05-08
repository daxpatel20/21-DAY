
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
  }

});


const searchInput = document.getElementById("searchInput");

if(searchInput){

  searchInput.addEventListener("keyup", () => {

    let filter = searchInput.value.toLowerCase();

    let movieBoxes = document.querySelectorAll(".movie-box");

    movieBoxes.forEach(box => {

      let text = box.innerText.toLowerCase();

      if(text.includes(filter)){
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }

    });

  });

}