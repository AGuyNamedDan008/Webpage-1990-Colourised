const colours = ["#ff0000", "#ff5500", "#ffaa00", "#ffff00", "#aaff00", "#55ff00", "#00ff00", "#00ff55",
    "#00ffaa", "#00ffff", "#00aaff", "#0055ff", "#0000ff", "#5500ff", "#aa00ff", "#ff00ff", "#ff00aa",
    "#ff0055"
];

let letters = document.querySelectorAll(".rainbow");

let intervalDelay = 100;

let counter = 0;
for (let x = 0; x < letters.length; x++) {
    if (colours[x] === undefined) {
        letters[x].style.color = colours[x - (colours.length * parseInt(counter + .1))];
    } else {
        letters[x].style.color = colours[x];
    }
    counter += 1 / colours.length;
}

var intervalId = window.setInterval(function () {

    for (let i = 0; i < letters.length; i++) {
        funky(i);
    }

}, intervalDelay);

function funky(i) {

    function cleanupRichText(richText) {
        return richText.replace(/rgb\((.+?)\)/ig, (_, rgb) => {
            return '#' + rgb.split(',')
                .map(str => parseInt(str, 10).toString(16).padStart(2, '0'))
                .join('')
        })
    }

    let hexColour = cleanupRichText(letters[i].style.color);

    if (colours.indexOf(hexColour) + 1 === colours.length) {
        colourIndex = 0;
    } else {
        colourIndex = colours.indexOf(hexColour) + 1;
    }
    letters[i].style.color = colours[colourIndex];
}