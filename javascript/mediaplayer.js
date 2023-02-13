var playlist = [
    "https://vgmsite.com/soundtracks/elite-commodore-64/rinajbdj/02_Docking%20Sequence.mp3",
    "https://vgmsite.com/soundtracks/duck-tales/uznqdxepvc/07%20Moon%20Surface%20%28The%20Moon%29.mp3",
    "https://vgmsite.com/soundtracks/kirby-super-star/lqhlwtvqfb/27%20Run%2C%20Kirby%2C%20Run%21.mp3",
    "https://vgmsite.com/soundtracks/animal-crossing-gc-rip/azzmbawn/76%207PM.mp3",
    "https://vgmsite.com/soundtracks/goldeneye-original-soundtrack/uhhbpvyd/05%20-%20escape%20from%20arkangelsk.mp3",
    "https://vgmsite.com/soundtracks/london-racer-psx-gamerip/mndevhtf/SLES-02694%20-%2002%20M25%20South.mp3",
    "https://i1.theportalwiki.net/img/3/38/Looping_radio_mix.wav",
    "https://vgmsite.com/soundtracks/half-life-original-soundtrack/bkzrrkqpyt/24.%20Credits%20Closing%20Theme.mp3",
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
        togglebtn.style.backgroundImage = "url('graphics/ui/play.gif')";
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
        togglebtn.style.backgroundImage = "url('graphics/ui/pause.gif')";
    } else {
        playing.pause();
        togglebtn.style.backgroundImage = "url('graphics/ui/play.gif')";
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
    togglebtn.style.backgroundImage = "url('graphics/ui/pause.gif')";
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
    togglebtn.style.backgroundImage = "url('graphics/ui/pause.gif')";
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
    togglebtn.style.backgroundImage = "url('graphics/ui/pause.gif')";
}