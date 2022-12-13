const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: false,
  dimensions: [512, 512],
  bleed: 1 / 8,
};

canvasSketch(() => {

  angleMode(DEGREES);
  noStroke();

  return ({
    playhead,
    width,
    height
  }) => {
    // clear();
    background(255);
    radialGradient(
      width / 2, height / 2, width / 2, //Start pX, pY, start circle radius
      width / 2, height / 2, 1, //End pX, pY, End circle radius
      color(255, 255, 255, 5), //End color
      color(0, 0, 0, 200), //Start color
    );
    ellipse(width / 2, height / 2, width, height);
  }

  function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
    let gradient = drawingContext.createRadialGradient(
      sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);
    drawingContext.fillStyle = gradient;
  }
}, settings);
