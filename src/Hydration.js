class Hydration {
  constructor(hydrationInfo, randomID) {
    this.hydrationInfo = hydrationInfo;
    this.currentUser = this.findUserHydration(randomID);
  }

  findUserHydration(id) {
    return this.hydrationInfo.filter((user) => user.userID === id);
  }

  findHydrationAverage() {
    let totalHydration = this.currentUser.reduce((acc, elem) => {
      acc += elem.numOunces;
      return acc;
    }, 0);
    return Math.round(totalHydration / this.currentUser.length);
  }

  findCurrentHydration(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).numOunces;
  }
  
  findOuncesPerWeek(id) {
    const hydrationWeek = this.currentUser.slice(-7);
    return hydrationWeek.map((info) => info.numOunces);
  }
}

export default Hydration;
