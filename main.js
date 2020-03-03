let clock;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(1);
    clock = new Clock();
}

function draw() {
    background('#101321');
    clock.renderClockFace();
}

window.onload = function () {
    const gui = new dat.GUI();
    gui.add(clock, 'segmentWidth', 20, 50);
    const segmentSizes = {
        min: Math.floor(width / 12),
        max: Math.floor(width / 8)
    }
    gui.add(clock, 'segmentSize', segmentSizes.min, segmentSizes.max);
}