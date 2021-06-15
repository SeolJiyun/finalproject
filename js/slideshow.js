var slides = document.querySelectorAll("#videoslides > a > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var bgm = document.getElementById("bgm");
var pic = document.getElementById("character");

var current = 0;

showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;
pic.onmouseover = on;
pic.onmouseout = off;

function showSlides(n) {
    if (n > 2)
     return;
    for (var i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    slides[n+1].style.display = "block";
    slides[n+2].style.display = "block";
    slides[n+3].style.display = "block";
}

function prevSlide() {
    if(current > 0) current -= 1;
    else return;
        showSlides(current);
}

function nextSlide() {
    if(current < 2) current += 1;
    else return;
        showSlides(current);
}

function on(){bgm.play();}
function off(){bgm.pause();}