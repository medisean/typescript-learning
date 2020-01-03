/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
namespace Drawing {
  function drawAllShapes(shape: Drawing.IShape) {
    shape.draw()
  }

  drawAllShapes(new Circle())
}
