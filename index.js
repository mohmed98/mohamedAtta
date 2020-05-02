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
