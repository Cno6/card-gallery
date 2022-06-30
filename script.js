let slides = document.querySelectorAll('.slide')
let button = document.querySelector('button')

slides.forEach(slide => slide.addEventListener('click', activateSlide))
button.addEventListener('click', buttonHandle)

function activateSlide(e) {
  clearActiveSlides();
  e.target.classList.add('active');
}

function clearActiveSlides() {
  slides.forEach(slide => {
    if (slide.classList.contains('active')) slide.classList.remove('active');
  })
}

function buttonHandle() {
  clearActiveSlides();
}