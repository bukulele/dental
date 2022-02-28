const list = document.getElementById("nav__list");

function switchBurgerMenu() {
  if (list.classList.contains("listVisible")) {
    list.setAttribute("style", "visibility: hidden; opacity: 0");
    list.classList.remove("listVisible");
  } else {
    list.setAttribute("style", "visibility: visible; opacity: 1");
    list.classList.add("listVisible");
  }
}
