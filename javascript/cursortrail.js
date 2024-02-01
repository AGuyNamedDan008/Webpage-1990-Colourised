const trailLength = 8;
const trailImage = "graphics/ui/firecursor.gif";
let coordsStore = new Array(trailLength).fill({});

const initTrail = () => {
    for (let i = 0; i < trailLength; i++) {
        coordsStore[i] = new Object();
        coordsStore[i].x = -1000;
        coordsStore[i].y = -1000;
        let div = document.createElement('div');
        div.id = `trail-${i}`;
        document.body.append(div); 
    }
    trail();
};

const trail = () => {
    for (let i = 0; i < trailLength; i++) {
        document.querySelector(`#trail-${i}`).style.top = `${coordsStore[i].y}px`;
        document.querySelector(`#trail-${i}`).style.left = `${coordsStore[i].x}px`;
    }
    for (let i = trailLength; i >= 1; i--) {
        coordsStore[i] = coordsStore[i - 1];
    }
    setTimeout(trail, 0);
};
initTrail();
document.onmousemove = (e) => void(coordsStore[0] = {
    x: e.pageX + 12,
    y: e.pageY + 12
});