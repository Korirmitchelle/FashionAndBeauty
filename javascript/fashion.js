var blue = document.getElementById("background");

var orange = [
    "url('images/stylywoman.jpg')",
    "url('images/jewellery.jpg')",
    "url('images/fake.jpg')",
    "url('images/makeup1.jpg')",
    "url('images/bbwoman.jpg')",
    "url('images/redtop.jpg')"


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
