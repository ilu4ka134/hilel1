var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

afterTime(2000);
function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  console.log(n);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");

  if (n && n > slides.length) {
    slideIndex = 1;
  }
  if (n && n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    // dots[i].className = dots[i].className.replace("active", "");
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex <= 0) slideIndex = slides.length;

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  // dots[slideIndex - 1].className += " active";

  afterTime(2000);
}

function afterTime(delay) {
  clearInterval(timer);
  timer = setInterval(() => {
    slideIndex++;
    showSlides();
  }, delay);
}
