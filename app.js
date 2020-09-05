const slides = document.querySelector(".slider-wrapper").children;
const indicator = document.querySelector(".indicator");
let slideIndex = 0;

function nextSlide() {
  if (slideIndex == slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  changeSlide();
}

function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
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
  slideIndex = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[slideIndex].classList.add("active");
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
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

/*------------Pop up-------------------- */
const photoGallery = document.querySelector(".photos-wrapper").children;
const lightBoxContainer = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox-img");
let imgSrc;
let index;

for (let j = 0; j < photoGallery.length; j++) {
  photoGallery[j].addEventListener("click", function () {
    index = j;
    lightBox();
    changeImage();
  });
}

function next() {
  if (index == photoGallery.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
}

function prev() {
  if (index == 0) {
    index == photoGallery.length - 1;
  } else {
    index--;
  }
  changeImage();
}

function lightBox() {
  lightBoxContainer.classList.toggle("open");
}
function changeImage() {
  imgSrc = photoGallery[index].querySelector("img").getAttribute("src");
  lightBoxImage.src = imgSrc;
}

/*------------Pop up-------------------- */
