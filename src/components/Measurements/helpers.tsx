export const getOrder = (wall: number, distanceFrom: number) => {
  if ((wall === 1 || wall === 3) && distanceFrom === 2) return false;
  if ((wall === 1 || wall === 3) && distanceFrom === 4) return true;
  if ((wall === 2 || wall === 4) && distanceFrom === 1) return false;
  if ((wall === 2 || wall === 4) && distanceFrom === 3) return true;
};

export const getElementSize = (
  wall: number,
  size: number,
  verticalWall: number,
  horizontalWall: number,
) => {
  if (wall === 1 || wall === 3) {
    return Math.floor((size / verticalWall) * 100);
  } else {
    return Math.floor((size / horizontalWall) * 100);
  }
};
