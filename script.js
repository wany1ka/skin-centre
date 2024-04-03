function toggleReadMore(moreId, cutId, buttonId) {
  let moreText = document.getElementById(moreId);
  let cutText = document.getElementById(cutId);
  let btnText = document.getElementById(buttonId);

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

