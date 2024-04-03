function toggleReadMore(moreId, cutId, buttonId) {
  var moreText = document.getElementById(moreId);
  var cutText = document.getElementById(cutId);
  var btnText = document.getElementById(buttonId);

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    cutText.style.display = "none";
    btnText.innerHTML = "Read less";
  } else {
    moreText.style.display = "none";
    cutText.style.display = "inline";
    btnText.innerHTML = "Read more";
  }
  btnText.style.display = "inline"; // Show the button after click
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
