const speed = 60;
let pos = 0;
const msg = " Webpage-1990-Colourised ";

function Scroll() {
    document.title = msg.substring(pos) + " | " + msg.substring(0, pos);
    pos++;
    if (pos > msg.length) pos = 0;
    setTimeout(Scroll, speed);
}
Scroll();