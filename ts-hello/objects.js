var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X:" + this.x + ",Y:" + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //.....
    };
    return Point;
}());
// let point: Point;
// point.draw();
var point = new Point();
point.x = 5;
point.y = 3;
point.draw();
