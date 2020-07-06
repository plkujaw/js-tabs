const buttons = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  // target buttons by checking if clicked target has a dataset id
  const id = event.target.dataset.id;
  if (id) {
    buttons.forEach((button) => {
      button.classList.remove("active");
      event.target.classList.add("active");
    });
  }
});
