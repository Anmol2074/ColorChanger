const buttons = document.querySelectorAll(".button");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    // remove active from all
    buttons.forEach(btn => btn.classList.remove("active"));

    // add active to selected
    e.target.classList.add("active");

    // change background color
    body.style.backgroundColor = e.target.id;
  });
});
