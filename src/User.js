class User {
  constructor(userInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.address = userInfo.address;
    this.strideLength = userInfo.strideLength;
    this.dailyStepGoal =  userInfo.dailyStepGoal;
    this.friends = userInfo.friends;
  }
  showFirstName() {
    return this.name.split(' ')[0];
  }
}

export default User;
