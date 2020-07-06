const buttons = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  // target buttons by checking if clicked target has a dataset=id
  const id = event.target.dataset.id;
  if (id) {
    // remove active form buttons and add only to the clicked one
    buttons.forEach((button) => {
      button.classList.remove("active");
      event.target.classList.add("active");
    });
    // hide articles and display only one with matching clicked button id
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const tabContent = document.getElementById(id);
    tabContent.classList.add("active");
  }
});
