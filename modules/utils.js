export const getFullNames = (arr1, arr2) => {
  let fullNames = [];

  let array1 = [...arr1];
  let array2 = [...arr2];

  array1.sort(() => 0.5 - Math.random());
  array2.sort(() => 0.5 - Math.random());

  while (array1.length) {
    let name1 = array1.pop(); // get the last value of array1
    let name2 = array2[0] == name1 ? array2.pop() : array2.shift();
    //        ^^ if the first value is the same as name1,
    //           get the last value, otherwise get the first

    let fullName = `${name1} ${name2}`;
    fullNames.push(fullName);
  }
  return fullNames;
};

export const getSpecialMeal = (arr) => {
  if (Math.floor(Math.random() * 4) === 3) {
    // 25% chance of getting a special meal
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  } else {
    return "";
  }
};

export const percentageAboveNum = (num) => {
  let above75 = 0;
  do {
    above75 = Math.random();
  } while (above75 < num);
  return above75.toFixed(4);
};

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const createCurrentFlightPax = (
  firstNames,
  lastNames,
  currentOccupancyNumber,
  currentOccupancyPaxArray,
  choices,
  myPassengerClass
) => {
  let name = getFullNames(
    firstNames.slice(0, currentOccupancyNumber),
    lastNames.slice(0, currentOccupancyNumber)
  );
  let currentSeatChart = [];
  currentOccupancyPaxArray.map((seat, index) => {
    let specialMeal = getSpecialMeal(choices);
    currentSeatChart.push(new myPassengerClass(seat, name[index], specialMeal));
  });
  return currentSeatChart;
};
