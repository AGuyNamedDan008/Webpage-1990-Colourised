var followers = document.getElementById("followers");
var url = "https://corsproxy.io/?https://neocities.org/site/webpage-1990-colourised";
var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 4 && xhttp.status == 200){
    html = xhttp.responseText.split(" ")
    followPos = html.indexOf("<span>followers</span></div>\n")
    followNum = html[followPos-1].replace(/\D/g,'')
    followers.innerHTML = followNum
    xhttp.abort()
    }
}
xhttp.send();