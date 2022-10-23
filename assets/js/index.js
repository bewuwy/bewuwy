// scroll animation
window.addEventListener("scroll", function () {
  showFunction();
});

function showFunction() {
  let root = document.documentElement;
  
  let e1 = document.getElementById("sub1");
  let e2 = document.getElementById("sub2");
  let arrow = document.getElementById("arrow");
  let title = document.getElementById("title");
  let img = document.getElementById("img");
  let p = document.getElementById("page1");
  let socials = document.getElementById("socials");
  
  const scrollToTrigger = 120;
  const scrollAmount =
  document.body.scrollTop || document.documentElement.scrollTop;
  
  root.style.setProperty("--scrolled-down", scrollAmount * -0.03 + "em");
  
  if (scrollAmount > scrollToTrigger) {
    // document.getElementById(id1).style.display = "inline";
    title.classList.add('scale-05');
    img.classList.add('scale-05');
    
    e2.style.display = "none";
    
    e1.classList.add("show");
    e1.classList.remove("hide-display");
    
    socials.classList.add("show");
    socials.classList.remove("hide");
    
    arrow.style.visibility = "hidden";

    p.classList.remove('narrow');
  } else {
    title.classList.remove('scale-05');
    img.classList.remove('scale-05');
    
    e2.style.display = "inline";
    
    e1.classList.add("hide-display");
    e1.classList.remove("show");
    
    socials.classList.remove("show");
    socials.classList.add("hide");
    
    arrow.style.visibility = "visible";
    
    p.classList.add('narrow')
  }
}
