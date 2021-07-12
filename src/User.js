class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal =  userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }
  showFirstName() {
    // consol.log()
  }
}

export default User;
