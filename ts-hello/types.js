// var count a =5;
// count = "a";
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
    color[color["Purple"] = 3] = "Purple";
})(color || (color = {}));
var backgriundColor = Color.Red;
