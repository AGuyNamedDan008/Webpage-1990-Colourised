var closebtn = document.getElementById("closebtn");
var clippybtn = document.getElementById("clippybtn");
var clippybox = document.getElementById("clippy-box");

closebtn.addEventListener("click", close);

function close() {
    clippybox.classList.toggle("hide");
    clippybtn.addEventListener("click", open);
}

function open() {
    clippybox.classList.toggle("hide");
    clippybtn.removeEventListener("click", open);
}