import $ from "jquery";

$(".hamburger").on("click", () => {
  $(".hamburger__line").toggleClass("hamburger__line--close");
  $(".nav").toggleClass("show-menu");
});
