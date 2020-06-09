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

var modalback = document.getElementById("modal-backdrop");
var modal = document.getElementById("create-dis");
var op = document.querySelector("button#create-dis-button")
var smallcross = document.querySelector("button.m-close");
var cancelbutton = document.querySelector("button.m-cancel");


op.addEventListener('click', function () {
    modal.style.display = "block";
    modalback.style.display = "block";
})

var distext = '';
var disauthor = '';

smallcross.addEventListener('click', function () {
    modal.style.display = "none";
    modalback.style.display = "none";
    document.querySelector("textarea#dis-text-input").value = '';
    document.querySelector("input#dis-stu").value = '';
})

cancelbutton.addEventListener('click', function () {
    modal.style.display = "none";
    modalback.style.display = "none";
    document.querySelector("textarea#dis-text-input").value = '';
    document.querySelector("input#dis-stu").value = '';
})


var newtext = document.querySelector("textarea#dis-text-input");
newtext.addEventListener('change', function (event) {
    distext = event.currentTarget.value;
})

var newauthor = document.querySelector("input#dis-stu");
newauthor.addEventListener('change', function (event) {
    disauthor = event.currentTarget.value;
})

var createbutton = document.querySelector("button.m-create");
createbutton.addEventListener('click', function () {

    if (document.querySelector("textarea#dis-text-input").value != '' && document.querySelector("input#dis-stu").value != '') {
        var maincontainer = document.querySelector("main.disContainer");
        var dissection = document.createElement('article');
        dissection.classList.add("dis");
        maincontainer.appendChild(dissection);

        var disicon = document.createElement('div');
        disicon.classList.add("dis-icon");
        dissection.appendChild(disicon);

        var disi = document.createElement('img');
        disi.classList.add("dis-img");
        disi.setAttribute('src', './DiscussionImage/brain.png');
        disi.setAttribute('alt', 'brain logo');
        disi.setAttribute('width', '30')
        disicon.appendChild(disi);

        var discontent = document.createElement('div');
        discontent.classList.add("dis-content");
        dissection.appendChild(discontent);

        var ndistext = document.createElement('p');
        ndistext.classList.add("dis-text");
        ndistext.textContent = distext;
        discontent.appendChild(ndistext);

        var ndisauthor = document.createElement('p');
        ndisauthor.classList.add("dis-st");
        ndisauthor.textContent = disauthor;
        discontent.appendChild(ndisauthor);

        // var disa = document.createElement('a');
        // disa.setAttribute('href', '#');
        // disa.textContent = disauthor;
        // ndisauthor.appendChild(disa);

        modal.style.display = "none";
        modalback.style.display = "none";

        document.querySelector("textarea#dis-text-input").value = '';
        document.querySelector("input#dis-stu").value = '';
    } else {
        alert("The dis text and dis author cannot be empty!")
    }


})

// var searchtext = [];
// var newsearch = document.querySelector("input#search-input");
// newsearch.addEventListener('change', function (event) {
//     var wordText = event.currentTarget.value;
//     searchtext = wordText.toLowerCase().split(' ');
//     document.querySelector("input#search-input").value = "";
// })

// var searchbutton = document.querySelector("button#search-button");
// searchbutton.addEventListener('click', function(){
//     var box = document.getElementsByClassName("classes");
//     var boxtext = document.getElementsByClassName("class-text");
//     for (var i = box.length-1; i >= 0; i--){
//         var tmptext = String(boxtext[i].innerText);
//         tmptext = tmptext.toLowerCase();
//         var matchnumber = 0;
//         for (var x = 0; x < searchtext.length; x++){
//             if (tmptext.indexOf(searchtext[x]) > -1 ){
//                 matchnumber += 1;
//             }
//         }
//         if (matchnumber == 0){
//             box[i].remove();
//             console.log("delete one");
//         }
//     }
    
// })