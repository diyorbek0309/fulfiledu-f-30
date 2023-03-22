const toggleOpen = document.querySelector(".open");
const toggleClose = document.querySelector(".close");
const navbar = document.querySelector(".navbar_3_grid");
const toggleDark = document.querySelector(".toggle_dark");
const container = document.querySelector(".body");
const button = document.querySelector(".btn");

toggleOpen.addEventListener("click", () => {
  navbar.classList.toggle("not-active");
  toggleOpen.classList.add("not-active");
  toggleClose.classList.remove("not-active");
});

toggleClose.addEventListener("click", () => {
  navbar.classList.toggle("not-active");
  toggleOpen.classList.remove("not-active");
  toggleClose.classList.add("not-active");
});

toggleDark.addEventListener("click", () => {
  container.classList.toggle("dark_mode");

  if (container.classList.contains("dark_mode")) {
    toggleDark.style.background = "rgb(34, 126, 126)";
    button.style.background = "rgb(34, 126, 126)";
  } else {
    toggleDark.style.background = "#000";
    button.style.background = "#000";
  }
});
