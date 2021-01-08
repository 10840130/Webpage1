var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  changeimg(slideIndex += n);
}

function currentSlide(n) {
  changeimg(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("selection");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  /*遮蔽非當前圖片 */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /*替換classname來顯示圖片*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  /*自動撥放圖片 */
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  setTimeout(showSlides, 2000);
}

/*避免btn導致++衝突 */
function changeimg(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("selection");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  /*遮蔽非當前圖片 */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  /*替換classname來顯示圖片*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}