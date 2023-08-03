const tabButtons = document.querySelectorAll(".nav-tabs .nav-link");
const tabContent = document.getElementById("nav-tabContent");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    const tabPanes = tabContent.getElementsByClassName("tab-pane");
    for (let i = 0; i < tabPanes.length; i++) {
      tabPanes[i].classList.remove("active");
      tabPanes[i].classList.remove("fade");
    }

    const target = button.getAttribute("data-target");
    const tabPane = document.querySelector(target);

    button.classList.add("active");

    tabPane.classList.add("active");
    tabPane.classList.add("fade");
  });
});
