import shape = require("./IShape");
import circle = require("./Circle");

function drawAllShapes(s: shape.IShape) {
  s.draw();
}

drawAllShapes(new circle.Circle())