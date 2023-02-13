topbtn = document.getElementById("topbtn")

topbtn.addEventListener("click", totop);

function totop() {
    document.documentElement.scrollTop = 0;
}