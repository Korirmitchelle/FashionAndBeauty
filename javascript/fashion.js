var blue = document.getElementById("background");

var orange = [
    "url('images/stylywoman.jpg')",
    "url('images/jewellery.jpg')",
    "url('images/eyemak1.jpg')",
    "url('images/beautiful-eye-makeup-asian.jpg')",
    "url('images/bbwoman.jpg')"


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
