const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
let bigImg = document.getElementById("bigImg");
const bigImg1 = "./img/IMG_1089_copy.png";
const bigImg2 = "./img/IMG_1090.JPG.png";

const menuBtn = document.querySelector(".menuBtn").firstElementChild;
const closeMenu = document.querySelector(".close");
const menuSlider = document.querySelector(".nav__menu");

img1.addEventListener("click", () => {
  bigImg.src = bigImg1;
});

img2.addEventListener("click", () => {
  bigImg.src = bigImg2;
});

// bigImg.onload = function () {
//   if (bigImg.width > bigImg.height) {
//     bigImg.height = "100%";
//     bigImg.width = "100%";
//   }
// };

menuBtn.addEventListener("click", () => {
  menuSlider.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuSlider.classList.remove("active");
});
