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
