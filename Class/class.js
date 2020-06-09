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

var searchtext = [];
var newsearch = document.querySelector("input#search-input");
newsearch.addEventListener('change', function (event) {
    var wordText = event.currentTarget.value;
    searchtext = wordText.toLowerCase().split(' ');
    document.querySelector("input#search-input").value = "";
})

var searchbutton = document.querySelector("button#search-button");
searchbutton.addEventListener('click', function(){
  
  var boxtext,i,class_ct;
  var box = document.getElementsByClassName("classes");
  class_ct = document.getElementById("class-container");
  boxtext = class_ct.getElementsByTagName("li");


  
    for (var i = box.length-1; i >= 0; i--){
      var tmptext = String(boxtext[i].innerText);
      tmptext = tmptext.toLowerCase();
      var matchnumber = 0;
      for (var x = 0; x < searchtext.length; x++){
          if (tmptext.indexOf(searchtext[x]) > -1 ){
              matchnumber += 1;
          }
      }
      if (matchnumber == 0){
          boxtext[i].style.display = 'none';
          console.log("delete one");
      }
  }
     
})

newsearch.addEventListener('click', function (event) {
  var class_ct = document.getElementById("class-container");
  var boxtext = class_ct.getElementsByTagName("li");
  var box = document.getElementsByClassName("classes");
  for (var i = box.length-1; i >= 0; i--){
    boxtext[i].style.display = 'block';
  }
  console.log("redisplay");
})

