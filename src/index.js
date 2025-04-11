function myFunction(iconDisplay) {
  let x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  console.log("icon display", iconDisplay);
  iconDisplay.classList.toggle("change");
}
