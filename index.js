//Call scrollFunction
document
  .getElementById("outer-wrapper")
  .addEventListener("scroll", stickyFunction);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var navPos = navbar.getBoundingClientRect().left;

}
