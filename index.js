// nav queries
const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const links = document.querySelectorAll(".link");
// slide queries
const nextBtn = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.getElementsByClassName("slide");
const panels = document.querySelectorAll(".panel");

// toggle navigation button
burger.addEventListener("click", (e) => {
  e.preventDefault();

  nav.classList.toggle("open");
  burger.classList.toggle("open");
});

// close navigation when click on link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    panels.forEach((element) => {
      element.classList.add("hide");
    });

    document.getElementById(e.target.dataset.id).classList.remove("hide");

    nav.classList.toggle("open");
    burger.classList.toggle("open");
  });
});

let currentSlide = 0;

//show images on prev and next button
const showSlides = () => {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
};

showSlides(currentSlide);

nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  console.log(currentSlide);
  showSlides(slides[currentSlide]);
});

prev.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  console.log(currentSlide);
  showSlides(slides[currentSlide]);
});
