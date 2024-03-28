function readMore() {
  let dots = document.getElementById("cut1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("btwn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
// readMore();

function readMore() {
  let dots = document.getElementById("cut2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("btwn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
readMore();


