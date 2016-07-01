var blue = document.getElementById("background");

var orange = [
    "url('')",

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
