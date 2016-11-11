
var btn = document.getElementById("btn");
var fullPageMenu = document.getElementById("nav-menu");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");
var links = document.getElementsByTagName("li");
// OPEN OVERLAY

btn.addEventListener("click", function() {
    console.log("lol");
    btn.classList.add("hide");
    fullPageMenu.classList.remove("hide");
    fullPageMenu.classList.add("show");
    for(var i = 0; i < links.length; i++) {

        links[i].classList.add("animation-overlay");
    }

});

// CLOSE OVERLAY

closeBtn.addEventListener('click', function() {
    console.log("close");
    fullPageMenu.classList.remove("animation-overlay");
    fullPageMenu.classList.remove("show");
    nav.classList.remove("overlay");
    btn.classList.remove("hide");

});
