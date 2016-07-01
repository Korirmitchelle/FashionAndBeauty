var blue = document.getElementById("background");

var orange = [
    "url('images/fashion2.jpg')",
    "url('images/makeup.jpg')",
    "url('images/fashion3.jpg')",
    "url('images/beauty.jpg')",
    "url('images/tbdress.jpg')"

];
var counter = 0;

function slidy() {
    blue.style.backgroundImage = orange[counter];
    counter++;

    if (counter >= orange.length) {
        counter = 0
    }
}
setInterval(slidy, 6000);
