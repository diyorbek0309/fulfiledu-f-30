const categories = document.querySelector(".categories");
const contents = document.querySelectorAll(".contents");
categories.addEventListener("click", (e) => {
  contents.forEach((content) => {
    if (content.textContent.includes(e.target.textContent)) {
      content.classList.add("active");
      content.classList.remove("not_active");
    } else {
      content.classList.add("not_active");
      content.classList.remove("active");
    }
  });
});
