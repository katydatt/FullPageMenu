var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("nav-menu");
var closeBtn = document.getElementsByClassName("overlay-close")[0];

menuBtn.addEventListener('click', function() {
    menu.style.height = "100%";
    menu.style.opacity = 0.7;
    menuBtn.classList.add("hide");
});


closeBtn.addEventListener('click', function() {
    menu.style.height = "0%";
    menu.style.opacity = 0;
    menuBtn.classList.remove("hide");
});



// overlay-content
// display the first item scaled
// as the pointer over the list scale the items
