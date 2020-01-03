define(["require", "exports", "./Circle"], function (require, exports, circle) {
    "use strict";
    exports.__esModule = true;
    function drawAllShapes(s) {
        s.draw();
    }
    drawAllShapes(new circle.Circle());
});
