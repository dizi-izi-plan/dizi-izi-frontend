export type TWindow = {
  wall: number;
  size: number;
  distance: number;
  distanceFrom: number;
  isFocused: boolean;
};

export type TBalcony = TWindow & {
  openLeft: boolean;
};

export type TDoor = TBalcony & {
  openInside: boolean;
};

export type TImageElementContainer = TWindow;
