var prevScrollPos = window.pageYOffset;
// hide the navbar in mobile view, when scrolling down
window.onscroll = function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      // breakpoint for ios safari
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (window.matchMedia("(max-width: 337px)").matches) {
          document.getElementById("navbar").style.top = "-140px";
        } else {
          document.getElementById("navbar").style.top = "-93px";
        }
      }
    }
    prevScrollPos = currentScrollPos;
  }
}
