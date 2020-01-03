/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("this is a circle");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
