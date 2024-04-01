
var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right = "-250px";

menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close2.png";
    } else {
        sideNav.style.right = "-250px";
        menu.src = "images/menus.jpg";
    }
};

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active'); // Toggle the 'active' class on the menu
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

document.addEventListener("scroll", function() {
    var footer = document.querySelector("social-icons");
    if (window.scrollY > 0) {
        footer.style.display = "block";
    } else {
        footer.style.display = "none";
    }
});
