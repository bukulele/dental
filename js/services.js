const singleService = Array.from(
  document.getElementsByClassName("services__single-service")
);

singleService.forEach((element) => {
  element.addEventListener("click", changeDetails);
});

function changeDetails(event) {
  let elementHeight = event.target.offsetHeight;
  if (elementHeight === 50) {
    event.target.style.height = "100px";
    event.target.firstElementChild.setAttribute(
      "style",
      "transform: rotate(180deg)"
    );
    event.target.lastElementChild.setAttribute(
      "style",
      "visibility: visible; opacity: 1"
    );
  } else if (elementHeight === 100) {
    event.target.style.height = "50px";
    event.target.firstElementChild.setAttribute(
      "style",
      "transform: rotate(0deg)"
    );
    event.target.lastElementChild.setAttribute(
      "style",
      "visibility: hidden; opacity: 0"
    );
  }
}
