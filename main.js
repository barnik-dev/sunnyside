const menuBtn = document.querySelector(".menu-open");
const menu = document.querySelector(".menu");

const isActive = (domEl) => domEl.classList.contains("active");
const removeActive = (domEl) => domEl.classList.remove("active");
const addActive = (domEl) => domEl.classList.add("active");

menuBtn.addEventListener("click", function () {
  if (!isActive(menu)) {
    addActive(menu);
  } else if (isActive(menu)) {
    removeActive(menu);
  }
});
