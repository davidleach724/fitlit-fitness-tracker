class Hydration {
  constructor(hydrationInfo, randomID) {
    this.hydrationInfo = hydrationInfo;
    this.currentUser = this.findUserHydration(randomID);
  }
  findUserHydration(id) {
    return this.hydrationInfo.filter(user => user.userID === id);
  }
  calculateHydrationAverage() {
    return this.hydrationInfo.reduce((acc, hydrationInfo) => {
      // console.log(hydrationInfo.numOunces)
      // acc += hydrationInfo.numOunces;
      // return acc;
    }, 0)
  }
  findOncesBasedOnDay(id ,date) {
    let userInfo = this.hydrationInfo.filter(user => user.userID === id);
    const test = userInfo.find(dataDate => dataDate.date === date).numOunces;
    return test;
    // return userInfo.find(dataDate => {dataDate.date === date}).numOunces);
  }
  findOuncesPerWeek(id) {
    let userInfo = this.hydrationInfo.filter(user => user.userID === id);
    // console.log('test', userInfo);

    let test1 = userInfo.slice(-7);
    console.log('slice: ', test1);

    let test2 = test1.map(info => info.numOunces)
    console.log('ouncesPerWeel: ', test2)
    return test2;
  }
}

export default Hydration;
