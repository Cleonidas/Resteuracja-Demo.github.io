var slideIndex = 1;
showSlides(slideIndex);

// To do przełączania slajdów strzałkami
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// A to do wybierania slajdu po slideIndex (do kropek)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i; //let lub const
  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");
  let slidesLenght = document.querySelectorAll("img").length;
  if (n > slidesLenght) {slideIndex = 1} 
  if (n < 1) {slideIndex = slidesLenght}
  for (i = 0; i < slidesLenght; i++) {
    slides[i].style.display = "none";
  
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = " block"; 
  slides[slideIndex-1].class = "mySlides";
  dots[slideIndex-1].className += " active";
}