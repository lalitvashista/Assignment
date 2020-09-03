const slides = document.querySelector(".slider-wrapper").children;
const indicator = document.querySelector(".indicator");
let index = 0;

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHtml = i + 1;
    div.setAttribute("onclick", "indicateSlide(this)");
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 4000);
}

function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 5000);
