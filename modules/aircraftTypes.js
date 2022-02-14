import { AircraftType } from "./classes/index.js";

export const B787_8 = new AircraftType(
  "Boeing 787-8",
  2,
  [3, 3, 3],
  "ABC-DEF-HJK",
  10,
  36,
  13,
  25,
  ["36A", "36K"]
);

export const A320 = new AircraftType(
  "Airbus 320",
  1,
  [3, 3],
  "ABC-DEF",
  8,
  30,
  13,
  0,
  []
);
