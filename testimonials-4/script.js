const sections = document.querySelectorAll("section");
const prevSlide = document.querySelector(".circle-left");
const nextSlide = document.querySelector(".circle-right");

let curSlide = 0;
let maxSlide = sections.length - 1;


sections.forEach((section, indx) => {
  section.style.transform = `translateX(${indx * 100}%)`;
});


nextSlide.addEventListener("click", function () {

    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

  sections.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


prevSlide.addEventListener("click", function () {

    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

sections.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

