class Hydration {
  constructor(hydrationInfo) {
    this.hydrationInfo = hydrationInfo;
  }
  findUserHydration(id) {
    return this.hydrationInfo.filter(user => user.userID === id);
  }
}

export default Hydration;
