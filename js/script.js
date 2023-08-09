const sideBar = document.querySelector(".side-bar");
const menuBar = document.querySelector(".menu-bar");
const closeBtn = document.querySelector(".close");

menuBar.addEventListener("click", () => {
  console.log("object");
  sideBar.classList.toggle("side-barVisible");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("side-barVisible");
})