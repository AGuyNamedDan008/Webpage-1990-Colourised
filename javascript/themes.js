var page = document.getElementsByTagName('body')[0].id
var theme = document.getElementById("theme");
var month = new Date().getMonth() + 1;
var date = new Date().getDate();

function monthcheck() {
    if (month == 10) {
        if (page == 'index') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_1 = document.querySelector(".theme_1");
            var theme_2 = document.querySelector(".theme_2");
            var theme_3 = document.querySelector(".theme_3");
            var headingtop = document.querySelector(".headingtop");
            var headingbottom = document.querySelector(".headingbottom");
            var theme_title = document.querySelector(".theme_title");
            var left = document.querySelector(".left");
            var right = document.querySelector(".right");
            document.body.style.backgroundImage = "url('graphics/themes/halloween/halloween.gif')";
            theme_overlay.classList.toggle("hallows");
            theme_1.classList.remove("hide");
            theme_1.classList.toggle("hallows");
            theme_2.classList.remove("hide");
            theme_2.classList.toggle("hallows");
            theme_3.classList.remove("hide");
            theme_3.classList.toggle("hallows");
            headingtop.classList.toggle("hallows");
            headingbottom.classList.toggle("hallows");
            theme_title.classList.remove("hide");
            theme_title.classList.toggle("hallows");
            left.classList.toggle("hallows");
            right.classList.toggle("hallows");
            playlist.unshift("https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/halloween/Monster%20Mash.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/halloween/Monster%20Mash.mp3?raw=true";
        } else if (page == 'pics') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_4 = document.querySelector(".theme_4");
            theme_overlay.classList.toggle("hallows");
            theme_4.classList.remove("hide");
            theme_4.classList.toggle("hallows");
            playlist.unshift("https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/halloween/Monster%20Mash.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/halloween/Monster%20Mash.mp3?raw=true";
        } else if (page == 'blog') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_5 = document.querySelector(".theme_5");
            var theme_6 = document.querySelector(".theme_6");
            theme_overlay.classList.toggle("hallows");
            theme_5.classList.remove("hide");
            theme_5.classList.toggle("hallows");
            theme_6.classList.remove("hide");
            theme_6.classList.toggle("hallows");
        } else {
            var theme_overlay = document.querySelector(".theme_overlay");
            document.body.style.backgroundImage = "url('graphics/themes/halloween/halloween.gif')";
            theme_overlay.classList.toggle("hallows");
        }
    }

    if (month == 12) {
        if (page == 'index') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_1 = document.querySelector(".theme_1");
            var theme_2 = document.querySelector(".theme_2");
            var theme_3 = document.querySelector(".theme_3");
            var headingtop = document.querySelector(".headingtop");
            var headingbottom = document.querySelector(".headingbottom");
            var theme_title = document.querySelector(".theme_title");
            var left = document.querySelector(".left");
            var right = document.querySelector(".right");
            document.body.style.backgroundImage = "url('graphics/themes/crimbo/crimbo.gif')";
            theme_overlay.classList.toggle("crimbo");
            theme_1.classList.remove("hide");
            theme_1.classList.toggle("crimbo");
            theme_2.classList.remove("hide");
            theme_2.classList.toggle("crimbo");
            theme_3.classList.remove("hide");
            theme_3.classList.toggle("crimbo");
            headingtop.classList.toggle("crimbo");
            headingbottom.classList.toggle("crimbo");
            theme_title.classList.remove("hide");
            theme_title.classList.toggle("crimbo");
            left.classList.toggle("crimbo");
            right.classList.toggle("crimbo");
            playlist.unshift("https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/crimbo/It's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/crimbo/It's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3?raw=true";
        } else if (page == 'pics') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_4 = document.querySelector(".theme_4");
            theme_overlay.classList.toggle("crimbo");
            theme_4.classList.remove("hide");
            theme_4.classList.toggle("crimbo");
            playlist.unshift("https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/crimbo/It's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/crimbo/It's%20Beginning%20To%20Look%20A%20Lot%20Like%20Christmas.mp3?raw=true";
        } else if (page == 'blog') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_5 = document.querySelector(".theme_5");
            var theme_6 = document.querySelector(".theme_6");
            theme_overlay.classList.toggle("crimbo");
            theme_5.classList.remove("hide");
            theme_5.classList.toggle("crimbo");
            theme_6.classList.remove("hide");
            theme_6.classList.toggle("crimbo");
        } else {
            var theme_overlay = document.querySelector(".theme_overlay");
            document.body.style.backgroundImage = "url('graphics/themes/crimbo/crimbo.gif')";
            theme_overlay.classList.toggle("crimbo");
        }
    }

    if (month == 2 && date == 14) {
        if (page == 'index') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_1 = document.querySelector(".theme_1");
            var theme_2 = document.querySelector(".theme_2");
            var theme_3 = document.querySelector(".theme_3");
            var headingtop = document.querySelector(".headingtop");
            var headingbottom = document.querySelector(".headingbottom");
            var theme_title = document.querySelector(".theme_title");
            var left = document.querySelector(".left");
            var right = document.querySelector(".right");
            document.body.style.backgroundImage = "url('graphics/themes/valentine/valentine.gif')";
            theme_overlay.classList.toggle("valentine");
            theme_1.classList.remove("hide");
            theme_1.classList.toggle("valentine");
            theme_2.classList.remove("hide");
            theme_2.classList.toggle("valentine");
            theme_3.classList.remove("hide");
            theme_3.classList.toggle("valentine");
            headingtop.classList.toggle("valentine");
            headingbottom.classList.toggle("valentine");
            theme_title.classList.remove("hide");
            theme_title.classList.toggle("valentine");
            left.classList.toggle("valentine");
            right.classList.toggle("valentine");
            playlist.unshift("hhttps://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/valentine/Valentines%20Day.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/valentine/Valentines%20Day.mp3?raw=true";
        } else if (page == 'pics') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_4 = document.querySelector(".theme_4");
            theme_overlay.classList.toggle("valentine");
            theme_4.classList.remove("hide");
            theme_4.classList.toggle("valentine");
            playlist.unshift("hhttps://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/valentine/Valentines%20Day.mp3?raw=true");
            playing.src = "https://github.com/AGuyNamedDan008/Webpage-1990-Colourised/blob/main/graphics/themes/valentine/Valentines%20Day.mp3?raw=true";
        } else if (page == 'blog') {
            var theme_overlay = document.querySelector(".theme_overlay");
            var theme_5 = document.querySelector(".theme_5");
            var theme_6 = document.querySelector(".theme_6");
            theme_overlay.classList.toggle("valentine");
            theme_5.classList.remove("hide");
            theme_5.classList.toggle("valentine");
            theme_6.classList.remove("hide");
            theme_6.classList.toggle("valentine");
        } else {
            var theme_overlay = document.querySelector(".theme_overlay");
            document.body.style.backgroundImage = "url('graphics/themes/valentine/valentine.gif')";
            theme_overlay.classList.toggle("valentine");
        }
    }
}

monthcheck()