window.onscroll = function () {
  fixed_nav();
};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function fixed_nav() {
  window.pageYOffset >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
}

function showNave() {
  let nav = document.getElementById("navbar");
  if (nav.className == "navBar") {
    nav.className += " responsiveNav";
  } else {
    nav.className = "navBar";
  }
}
