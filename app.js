
var btn = document.getElementById("btn");
var fullPageMenu = document.getElementById("nav-menu");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");
var links = document.getElementsByTagName("li");
// OPEN OVERLAY

btn.addEventListener("click", function() {
    fullPageMenu.classList.toggle("hide");
    fullPageMenu.classList.toggle("show");
    for(var i = 0; i < links.length; i++) {

        links[i].classList.add("animation-overlay");
    }

});

// CLOSE OVERLAY

closeBtn.addEventListener('click', function() {
    fullPageMenu.classList.remove("animation-overlay");
    fullPageMenu.classList.toggle("show");
    fullPageMenu.classList.toggle("hide");
    nav.classList.remove("overlay");

});
