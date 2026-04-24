const slides = document.getElementById("slides");
const slideCount = document.querySelectorAll(".slide").length;

let index = 0;
let interval = null;
let isAuto = false;



function showSlide(i) {
  if (i >= slideCount) index = 0;
  else if (i < 0) index = slideCount - 1;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById("next").addEventListener("click", () => {
  showSlide(index + 1);
});

document.getElementById("prev").addEventListener("click", () => {
  showSlide(index - 1);
});

document.getElementById("autoBtn").addEventListener("click", () => {
  if (isAuto) {
    clearInterval(interval);
    isAuto = false;
    document.getElementById("autoBtn").innerText = "⏵";
  } else {
    interval = setInterval(() => {
      showSlide(index + 1);
    }, 2000); 
    isAuto = true;
    document.getElementById("autoBtn").innerText = "⏸";
  }
});