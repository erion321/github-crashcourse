const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const sidebar = document.querySelector(".sidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("sidebar-open");
  //openBtn.style.zIndex = "-1";
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-open");
  //openBtn.style.zIndex = "1";
});

