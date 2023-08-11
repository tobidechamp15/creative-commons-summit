const sideBar = document.querySelector(".side-bar");
const menuBar = document.querySelector(".menu-bar");
const closeBtn = document.querySelector(".close");
const secondSection = document.querySelector(".speakerSecSect");
const viewMore = document.querySelector(".view-more");
const viewLess = document.querySelector(".view-less");
const width = window.innerWidth;
  viewLess.style.display = "none";

if (width <= 587) {
  secondSection.style.display = "none";
} else {
  secondSection.style.display="flex"
}
menuBar.addEventListener("click", () => {
  console.log("object");
  sideBar.classList.toggle("side-barVisible");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("side-barVisible");
});
viewMore.style.display = "flex";
viewMore.addEventListener("click", () => {
  secondSection.style.display = "flex";
  viewMore.style.display = "none";
  viewLess.style.display = "flex";
});

viewLess.addEventListener("click", () => {
  secondSection.style.display = "none";
  viewMore.style.display = "flex";
  viewLess.style.display = "none";
});
