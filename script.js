import { B787_8 } from "./modules/aircraftTypes.js";
import {
  createAircraft,
  occupiedSeatsAndSpecialMeals,
  clickingSeats,
} from "./modules/dom.js";
import {
  percentageAboveNum,
  shuffle,
  createCurrentFlightPax,
} from "./modules/utils.js";
import { Passenger } from "./modules/classes/index.js";
import { firstNames, lastNames, specialMeals } from "./modules/constants.js";

const percentageAbove75 = percentageAboveNum(0.75);
const maxOccupancy = B787_8.maxOccupancy;
const currentOccupancyNumber = Math.ceil(maxOccupancy * percentageAbove75);
const flatSeatChart = B787_8.seatChart.flat();
const currentOccupancyPaxArray = shuffle(flatSeatChart).slice(
  0,
  currentOccupancyNumber
);

createAircraft(B787_8.seatChart);

const currentFlightPax = createCurrentFlightPax(
  firstNames,
  lastNames,
  currentOccupancyNumber,
  currentOccupancyPaxArray,
  specialMeals,
  Passenger
);

occupiedSeatsAndSpecialMeals(currentFlightPax);
clickingSeats(currentFlightPax);
