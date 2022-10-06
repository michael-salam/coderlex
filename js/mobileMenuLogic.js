const hamburgerBtn = document.querySelector("button.hamburger");
const links = document.querySelector(".links");

const handleToggleMobileMenu = () => {
  if (links.classList.contains("open")) {
    links.classList.remove("open");
  } else {
    links.classList.add("open");
  }
};

hamburgerBtn.addEventListener("click", handleToggleMobileMenu);
links.addEventListener("click", handleToggleMobileMenu);
