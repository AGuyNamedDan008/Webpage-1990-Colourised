var page = document.getElementsByTagName('body')[0].id
var theme = document.getElementById("theme");
var date = new Date().getMonth() + 1;

function datecheck() {
    if (date == 10) {
        if (page == 'index') {
            var headingtop = document.getElementById("headingtop");
            var headingbottom = document.getElementById("headingbottom");
            var left = document.getElementById("left");
            var right = document.getElementById("right");
            document.body.style.backgroundImage = "url('graphics/themes/halloween/halloween.gif')";
            headingtop.src = 'graphics/themes/halloween/headingtop .gif'
            headingbottom.src = 'graphics/themes/halloween/headingbottom.gif'
            left.src = 'graphics/themes/halloween/skeleton-dootleft.gif'
            right.src = 'graphics/themes/halloween/skeleton-dootright.gif'
            theme.innerHTML = '<div style="display: inline; position: fixed; margin: 0%; width: 20%; top: 5%; left: 0%;"><img src="graphics/themes/halloween/skeleton-wave.gif"></div><div style="display: inline; position: fixed; margin: 0%; width: 20%; top: 55%; left: 0%;"><img src="graphics/themes/halloween/skeleton-creep.gif"></div><div style="display: inline; position: fixed; margin: 0%; width: 20%; top: 20%; right: 0%;"><img src="graphics/themes/halloween/skeleton-hello.gif"></div><div style="width: 100vw; height: 100vh; position: fixed; top: 0%; left: 0%; margin: 0px; display: block; pointer-events: none; background-size: cover; background-image: url(graphics/themes/halloween/blood-drip.gif);"></div>';
        }
        else if (page == 'pics') {
            theme.innerHTML = '<div style="display: inline; position: fixed; margin: 0%; width: 20%; top: 60%; left: 45%;"><img src="graphics/themes/halloween/skeleton-dance.gif"></div><div style="width: 100vw; height: 100vh; position: fixed; top: 0%; left: 0%; margin: 0px; display: block; pointer-events: none; background-size: cover; background-image: url(graphics/themes/halloween/blood-drip.gif);"></div>'
        }
        else if (page == 'blog') {
            theme.innerHTML = '<div style="display: inline; position: fixed; margin: 0%; width: 15%; top: 20%; left: 0%;"><img src="graphics/themes/halloween/skeleton-hang.gif"></div><div style="display: inline; position: fixed; margin: 0%; width: 20%; top: 20%; right: 0%;"><img src="graphics/themes/halloween/skeleton-run.gif"></div><div style="width: 100vw; height: 100vh; position: fixed; top: 0%; left: 0%; margin: 0px; display: block; pointer-events: none; background-size: cover; background-image: url(graphics/themes/halloween/blood-drip.gif);"></div>'
        }
        else {
            theme.innerHTML = '<div style="width: 100vw; height: 100vh; position: fixed; top: 0%; left: 0%; margin: 0px; display: block; pointer-events: none; background-size: cover; background-image: url(graphics/themes/halloween/blood-drip.gif);"></div>'
        }
    var song = ''
    }
}

datecheck()