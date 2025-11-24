function toggleMenu() {
  const menu = document.getElementById("menuMobile");
  menu.classList.toggle("an");
}

function openModal(){
  document.getElementById("modalDatLich").style.display = "flex";
}

function closeModal(){
  document.getElementById("modalDatLich").style.display = "none";
}

let slideIndex = 0;
autoSlide();

function autoSlide() {
  const slides = document.getElementsByClassName("slide-anh");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlide, 4000);
}
