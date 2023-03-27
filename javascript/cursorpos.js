var canvas = document.getElementById("canvas");
var isMouseHover = false;

canvas.addEventListener("mouseleave", function (event) {
    isMouseHover = false
    document.getElementById("pos").textContent = ("");
  }, false);

canvas.onmousemove = function (e) {
    var rect = e.target.getBoundingClientRect();
    var x = Math.round(e.clientX - rect.left);
    var y = Math.round(e.clientY - rect.top);
    document.getElementById("pos").textContent = (x + "," + y);
}