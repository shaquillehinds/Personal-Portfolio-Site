const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__image");
const modalX = document.querySelector(".modal__x");
const designs = document.querySelectorAll(".design");

designs.forEach((design) => {
  design.addEventListener("click", function (e) {
    const link = e.target.getAttribute("data-src");
    const linkMod = link.replace(".jpg", ".png");
    modalImg.setAttribute("src", linkMod);
    modal.classList.add("modal--open");
  });
});
modalX.addEventListener("click", () => modal.classList.remove("modal--open"));
window.addEventListener("keyup", (e) => {
  if (modal.classList.contains("modal--open") && e.keyCode === 27) {
    modal.classList.remove("modal--open");
  }
});
