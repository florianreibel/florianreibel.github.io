var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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
