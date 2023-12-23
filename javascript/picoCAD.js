var crispsbtn = document.getElementById("crispsbtn");
var milkbtn = document.getElementById("milkbtn");
var computorbtn = document.getElementById("computorbtn");
var eggbtn = document.getElementById("eggbtn");
var image = document.getElementById("image");
var text = document.getElementById("text");

crispsbtn.addEventListener("click", crisps);

function crisps() {
    image.src = "graphics/pics/crisps.gif";
    text.textContent = "crisps"
}

milkbtn.addEventListener("click", milk);

function milk() {
    image.src = "graphics/pics/milk.gif";
    text.textContent = "milk"
}

computorbtn.addEventListener("click", computor);

function computor() {
    image.src = "graphics/pics/computor.gif";
    text.textContent = "computor"
}

eggbtn.addEventListener("click", egg);

function egg() {
    image.src = "graphics/pics/egg.gif";
    text.textContent = "egg"
}