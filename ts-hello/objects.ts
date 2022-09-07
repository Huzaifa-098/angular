class Point {
  x: number;
  y: number;

  draw() {
    console.log("X:" + this.x + ",Y:" + this.y);
  }

  getDistance(another: Point) {
    //.....
  }
}

// let point: Point;
// point.draw();
let point = new Point();
point.x = 5;
point.y = 3;
point.draw();
