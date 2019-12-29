"use strict";
exports.__esModule = true;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAccesstaple = function (s) {
        return s.length == 5;
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
;
var zipCodeValidator = new ZipCodeValidator();
console.log(zipCodeValidator.isAccesstaple('s1'));
var numbers = [1, 2, 4, 5];
for (var n in numbers) { // print index
    console.log(n);
}
for (var i in numbers) { // print value
    console.log(numbers[i]);
}
// string demo
console.log("**********");
var s = "abcdb";
for (var c = 0; c < s.length; c++) {
    console.log(s[c]);
}
console.log(s.indexOf('b'));
// tuple
var t1 = ["abc", 19];
console.log(t1[0], t1[1]);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
console.log(color);
console.log(Color[2]);
