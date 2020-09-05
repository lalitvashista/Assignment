/*-------------------------------------slider------------------------------------ */
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

/*---------------------------------------Pop up Image-------------------- */
const photoGallery = document.querySelector(".photos-wrapper").children;
const lightBoxContainer = document.querySelector(".lightbox");
const lightBoxImage = document.querySelector(".lightbox-img");
const lightBoxText = document.querySelector(".lightbox-caption");
let imgSrc;
let photoIndex;

for (let j = 0; j < photoGallery.length; j++) {
  photoGallery[j].addEventListener("click", function () {
    photoIndex = j;
    lightBox();
    changeImage();
  });
}

function next() {
  if (photoIndex == photoGallery.length - 1) {
    photoIndex = 0;
  } else {
    photoIndex++;
  }
  changeImage();
}

function prev() {
  if (photoIndex == 0) {
    photoIndex == photoGallery.length - 1;
  } else {
    photoIndex--;
  }
  changeImage();
}

function lightBox() {
  lightBoxContainer.classList.toggle("open");
}
function changeImage() {
  imgSrc = photoGallery[photoIndex].querySelector("img").getAttribute("src");
  lightBoxImage.src = imgSrc;
  lightBoxText.innerHTML = photoGallery[photoIndex].querySelector("img").title;
}

/*----------------------------------Pop up video-------------------- */
const videoGallery = document.querySelector(".videos-wrapper").children;
const lightBoxContainerVd = document.querySelector(".lightboxvd");
const lightBoxVideo = document.querySelector(".lightboxvd-video");
const lightBoxVdText = document.querySelector(".lightboxvd-caption");
let videoSrc;
let Index;

for (let k = 0; k < videoGallery.length; k++) {
  videoGallery[k].addEventListener("click", function () {
    Index = k;
    lightBoxVd();
    changeVideo();
  });
}

function nextVd() {
  if (Index == videoGallery.length - 1) {
    Index = 0;
  } else {
    Index++;
  }
  changeVideo();
}

function prevVd() {
  if (Index == 0) {
    Index == videoGallery.length - 1;
  } else {
    Index--;
  }
  changeVideo();
}
function lightBoxVd() {
  lightBoxContainerVd.classList.toggle("open");
}

function changeVideo() {
  videoSrc = videoGallery[Index].querySelector("video").getAttribute("src");
  lightBoxVideo.src = videoSrc;
  lightBoxVdText.innerHTML = videoGallery[Index].querySelector("video").title;
}
