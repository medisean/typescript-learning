/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
var Drawing;
(function (Drawing) {
    function drawAllShapes(shape) {
        shape.draw();
    }
    drawAllShapes(new Drawing.Circle());
})(Drawing || (Drawing = {}));
