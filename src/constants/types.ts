export const Shapes = [
  "blob1",
  "blob2",
  "heart",
  "house",
  "flower",
  "moon",
  "knife",
  "cookie",
  "cat",
  "lamp",
  "monkey",
  "drop",
] as const;
export type ShapeTypes = (typeof Shapes)[number];

export const Colors = [
  "pink",
  "mint",
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
  "purple",
  "creme",
  "lime",
  "brown",
  "water",
] as const;
export type ColorTypes = (typeof Colors)[number];
