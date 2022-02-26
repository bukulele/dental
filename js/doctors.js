const singleDoctor = Array.from(
  document.getElementsByClassName("doctors__single-doctor")
);

singleDoctor.forEach((element) => {
  element.addEventListener("click", changeDetails);
});

function changeDetails(event) {
  let elementHeight = event.target.offsetHeight;
  if (elementHeight === 100) {
    event.target.setAttribute(
      "style",
      "height: 200px;  grid-template-columns: 200px 1fr 1fr;"
    );
    event.target.firstElementChild.setAttribute(
      "style",
      "transform: rotate(180deg)"
    );
    event.target.lastElementChild.setAttribute(
      "style",
      "visibility: visible; opacity: 1"
    );
  } else if (elementHeight === 200) {
    event.target.setAttribute(
      "style",
      "height: 100px;  grid-template-columns: 100px 1fr 1fr;"
    );
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
