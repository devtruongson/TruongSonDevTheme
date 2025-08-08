const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const slides = document.getElementsByClassName("slide");
let counter = 0;

for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  slide.style.left = `${i * 100}%`;
}

nextBtn.addEventListener("click", function () {
  counter--;
  slideImage();
});

prevBtn.addEventListener("click", function () {
  counter++;
  slideImage();
});

function slideImage() {
  // Check if the counter goes beyond the range of the slides array
  if (counter <= -slides.length) {
    counter = 0;
  } else if (counter > 0) {
    counter = -slides.length + 1;
  }
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.style.transform = `translateX(${ counter * 100 }%)`;
  }
}

setInterval(function() {
  counter--;
  slideImage();
}, 5000);