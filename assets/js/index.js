// scroll animation
window.addEventListener("scroll", function () {
  showFunction();
});

function showFunction() {
  let root = document.documentElement;
  let page = document.getElementById("page1");

  let title = document.getElementById("title");
  let sub1 = document.getElementById("sub1");
  let sub2 = document.getElementById("sub2");

  let img = document.getElementById("img");
  let socials = document.getElementById("iconbox");

  let arrow = document.getElementById("arrow");

  let showInitial = [sub2, arrow];
  let showAfter = [sub1, socials];

  const scrollToTrigger = 120;
  const scrollAmount =
    document.body.scrollTop || document.documentElement.scrollTop;

  root.style.setProperty("--scrolled-down", scrollAmount * -0.03 + "em");

  if (scrollAmount > scrollToTrigger) {
    title.classList.add("scale-05");
    img.classList.add("scale-05");
    page.classList.remove("narrow");

    showInitial.forEach((element) => {
      element.classList.remove("show");
      element.classList.add("hide");
    });

    showAfter.forEach((element) => {
      element.classList.add("show");
      element.classList.remove("hide");
      element.classList.remove("hide-display");
    });
  } else {
    title.classList.remove("scale-05");
    img.classList.remove("scale-05");
    page.classList.add("narrow");

    showInitial.forEach((element) => {
      element.classList.add("show");
      element.classList.remove("hide");
      element.classList.remove("hide-display");
    });

    showAfter.forEach((element) => {
      element.classList.remove("show");
      element.classList.add("hide");
    });

    sub1.classList.add("hide-display");
  }
}
