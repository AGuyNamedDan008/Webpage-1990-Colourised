var playlist = [
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/Frontier%20Elite%20II.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/02_Docking%20Sequence.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/07%20Moon%20Surface%20(The%20Moon).mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/034%20-%207%20PM%20(Normal).mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/24%20Clash!%20Gourmet%20Race%20-%20Pumpkin%20Grand.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/1-02%20Opening.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/1-05%20Chemical%20Warfare%20Facility%20%232.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/02%20M25%20South.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/06%20Country%20Route%20to%20London.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/portal_radio_mix.mp3?raw=true",
    "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/playlist/24.%20Credits%20Closing%20Theme.mp3?raw=true",
];
var index = 0;
var seek = document.getElementById("seek");
var togglebtn = document.getElementById("togglebtn");
var back = document.getElementById("back");
var next = document.getElementById("next");
var volume = document.getElementById("volume");
var playing = document.getElementById("playing")
var time = document.getElementById("time");

playing.src = playlist[index];

playing.addEventListener("loadedmetadata", setSliderMax);

function setSliderMax() {
    seek.setAttribute("max", playing.duration);
    seek.setAttribute("min", 0);
}

playing.addEventListener("timeupdate", setSeekVal);

function setSeekVal() {
    seek.value = playing.currentTime;
    if (playing.ended) {
        seek.value = 0;
        playing.currentTime = 0;
        togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/play.gif')";
        playing.pause();
    }
}

seek.addEventListener("input", setSeek);

function setSeek() {
    playing.currentTime = seek.value;
}

togglebtn.addEventListener("click", toggle);

function toggle() {
    if (playing.paused) {
        playing.play();
        togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/pause.gif')";
    } else {
        playing.pause();
        togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/play.gif')";
    }
}

back.addEventListener("click", decrement);

function decrement() {
    if (index === 0) {
        index = playlist.length - 1;
    } else {
        index--;
    }

    playing.src = playlist[index];
    playing.play();
    togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/pause.gif')";
}

next.addEventListener("click", increment);

function increment() {
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index++;
    }

    playing.src = playlist[index];
    playing.play();
    togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/pause.gif')";
}

volume.addEventListener("input", setVol);

function setVol() {
    playing.volume = volume.value / 100;
}

playing.addEventListener("timeupdate", seektime);

function seektime() {
    var mins = Math.floor(playing.currentTime / 60);
    var secs = Math.floor(playing.currentTime % 60);
    if (secs < 10) {
        secs = '0' + secs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    time.innerHTML = mins + ':' + secs;
}

playing.addEventListener('ended', audioEnd);

function audioEnd() {
    if (index === playlist.length - 1) {
        index = 0;
    } else {
        index++;
    }

    playing.src = playlist[index];
    playing.play();
    togglebtn.style.backgroundImage = "url('graphics/ui/mediaplayer/pause.gif')";
}