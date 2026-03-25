const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }

  const [pointX, pointY] = point;
  let nearest = null;
  let minDistance = Infinity;

  for (const [name, [x, y]] of locations) {
    let distance = getDistance([pointX, pointY], [x, y]);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = [name, [x, y]];
    }
  }

  return nearest;
};

export { getTheNearestLocation };
// END
