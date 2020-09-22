const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
let bigImg = document.getElementById("bigImg");
const bigImg1 = "./img/IMG_1089_copy.png";
const bigImg2 = "./img/IMG_1090.JPG.png";

img1.addEventListener("click", () => {
  bigImg.src = bigImg1;
});

img2.addEventListener("click", () => {
  bigImg.src = bigImg2;
});

bigImg.onload = function () {
  if (bigImg.height > bigImg.width) {
    bigImg.height = "10px";
    // bigImg.width = "100%";
  }
};
