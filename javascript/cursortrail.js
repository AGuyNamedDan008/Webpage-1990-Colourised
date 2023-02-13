const trailLength = 15;
const trailImage = "graphics/ui/firecursor.gif";
let coordsStore = new Array(trailLength).fill({});
const initTrail = () => {
    for (let i = 0; i < trailLength; i++) {
        coordsStore[i] = new Object();
        coordsStore[i].x = -1000;
        coordsStore[i].y = -1000;
        document.write(
            `<div id="obj-${i}" style="background-image:url(${trailImage});position:absolute;z-Index:100;height:35px;width:35px"></div>`,
        );
    }
    trail();
};
const trail = () => {
    for (let i = 0; i < trailLength; i++) {
        document.querySelector(`#obj-${i}`).style.top = `${coordsStore[i].y}px`;
        document.querySelector(`#obj-${i}`).style.left = `${coordsStore[i].x}px`;
    }
    for (let i = trailLength; i >= 1; i--) {
        coordsStore[i] = coordsStore[i - 1];
    }
    setTimeout(trail, 0);
};
initTrail();
console.log(coordsStore)
document.onmousemove = (e) => void(coordsStore[0] = {
    x: e.pageX + 12,
    y: e.pageY + 12
});