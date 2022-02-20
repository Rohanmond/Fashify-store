const dd_menu = document.querySelector(".dd_menu");
const profileBtn = document.querySelector(".profile-click-btn");

profileBtn.addEventListener("click", function () {
  dd_menu.classList.toggle("active");
});
