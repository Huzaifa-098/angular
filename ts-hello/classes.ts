interface point {
  x: number;
  y: number;
  draw: () => void;
}

let drawPoint = (point: point) => {};

let getDistance = (pointA: point, pointB: point) => {};
drawPoint({
  x: 1,
  y: 2,
});

class point {
  x: number;
  y: number;

  draw() {}

  getDistance(another: point) {}
}
