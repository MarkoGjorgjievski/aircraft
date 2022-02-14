export class AircraftType {
  constructor(
    name,
    aisles,
    seatGrouping,
    seatArrangement,
    startingRow,
    endingRow,
    absentRow,
    gapAfterRow,
    exceptionSeats
  ) {
    this.name = name;
    this.aisles = aisles;
    this.seatGrouping = seatGrouping;
    this.seatArrangement = seatArrangement;
    this.startingRow = startingRow;
    this.endingRow = endingRow;
    this.absentRow = absentRow;
    this.gapAfterRow = gapAfterRow;
    this.exceptionSeats = exceptionSeats;
  }

  get seatChart() {
    return this.constructSeatChart();
  }

  get maxOccupancy() {
    return this.seatChart.flat().length;
  }

  constructSeatChart = () => {
    let seatChart = [];
    for (let i = this.startingRow; i <= this.endingRow; i++) {
      if (i !== this.absentRow) {
        let row = [];
        for (const seat of this.seatArrangement) {
          if (seat !== "-" && !this.exceptionSeats.includes(i + seat)) {
            row.push(i + seat);
          }
        }
        seatChart.push(row);
      }
    }

    return seatChart;
  };
}
