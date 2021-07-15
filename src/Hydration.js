class Hydration {
  constructor(hydrationInfo, currentID) {
    this.hydrationInfo = hydrationInfo;
    this.currentUserID = currentID;
  }

  findUserHydration(id) {
    return this.hydrationInfo.filter(user => user.userID === id);
  }

  findHydrationAverage() {
    let currentUser = this.findUserHydration(this.currentUserID);
    let totalHydration = currentUser.reduce((acc, elem) => {
      acc += elem.numOunces;
      return acc;
    }, 0);
    return Math.round(totalHydration / currentUser.length);
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
