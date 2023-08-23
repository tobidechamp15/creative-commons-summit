const toProgram = document.querySelector(".toProgram");
toProgram.addEventListener("click", function () {
  var section = document.querySelector(".mainProgram");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});

const toAbout = document.querySelector(".toAbout");
toAbout.addEventListener("click", function () {
  var section = document.querySelector(".name-logo");
  section.scrollIntoView({ behavior: "smooth" });
  console.log("clikkk");
});

// Add animation to section .toAbout
var aboutSection = document.getElementById("aboutMe"); // Get the element with id="demo".
window.onscroll = function () {
  myFunction();
}; // Run every time you scroll and check if it's in view or not, then
