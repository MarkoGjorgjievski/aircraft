export const createAircraft = (array) => {
  let box = document.getElementById("box");
  array.forEach((row) => {
    let _row = document.createElement("div");
    _row.classList.add("row");
    row.forEach((seat) => {
      let _seat = document.createElement("span");
      _seat.innerHTML = seat;
      _seat.classList.add(seat, "seat");
      _row.appendChild(_seat);
    });
    box.appendChild(_row);
  });
};

export const occupiedSeatsAndSpecialMeals = (arr) => {
  arr.forEach((pax) => {
    let occupied = document.getElementsByClassName(pax.seatNumber)[0];
    if (pax.specialMeal !== "") {
      let hasSpecialMeal = document.getElementsByClassName(pax.seatNumber)[0];
      hasSpecialMeal.classList.add("hasSpecialMeal");
    }
    occupied.classList.add("occupied");
  });
};

export const clickingSeats = (arr) => {
  let clickedSeat = document.addEventListener(
    "click",
    function (e) {
      let target = e.target;
      let targetIsSeat = target.classList.contains("occupied");

      if (targetIsSeat) {
        let seatNumber = "";
        let clickedPassenger;

        if (target.tagName === "SPAN") {
          seatNumber = target.innerText;
        }

        arr.forEach((pax) => {
          if (pax.seatNumber === seatNumber) {
            clickedPassenger = pax;
            return clickedPassenger;
          }
        });

        let details = document.getElementById("details");
        details.querySelectorAll("*").forEach((n) => n.remove());

        for (const [_, value] of Object.entries(clickedPassenger)) {
          if (value !== "") {
            let _key = document.createElement("p");
            _key.innerText = value;
            details.appendChild(_key);
          } else {
            let _key1 = document.createElement("p");
            _key1.innerText = "no spml";
            details.appendChild(_key1);
          }
        }
      } else {
        return;
      }
    },
    false
  );
  return clickedSeat;
};
