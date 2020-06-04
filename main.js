// Reference
// 1) Fixed header
//    https://www.w3schools.com/howto/howto_js_sticky_header.asp
// 2) Slides
//    https://www.w3schools.com/w3css/w3css_slideshow.asp

var header = document.querySelector(".header");
var sticky = header.offsetTop;


window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

function current(n) {
  showPic(index = n)
}

function showPic(n) {
  var x = document.querySelectorAll(".picture");
  if (n > x.length) { index = 1 }
  if (n < 1) { index = x.length }
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[index - 1].style.display = "block";
}

