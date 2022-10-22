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
    title.style.transform = "scale(0.5)";
    img.style.transform = "scale(0.5)";
    
    e2.style.display = "none";
    
    e1.classList.add("show");
    e1.classList.remove("hide-display");
    
    socials.classList.add("show");
    socials.classList.remove("hide");
    
    arrow.style.visibility = "hidden";
    
    p.style.width = "calc(100% - 30rem)";
    p.style.margin = "0 15rem";
  } else {
    title.style.transform = "scale(1)";
    img.style.transform = "scale(1)";
    
    e2.style.display = "inline";
    
    e1.classList.add("hide-display");
    e1.classList.remove("show");
    
    socials.classList.remove("show");
    socials.classList.add("hide");
    
    arrow.style.visibility = "visible";
    
    p.style.width = "calc(100% - 20rem)";
    p.style.margin = "0 10rem";
  }
}
