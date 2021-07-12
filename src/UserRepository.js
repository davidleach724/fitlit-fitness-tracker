class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  getUserData(id) {
    return this.userData.find((user) => user.id === id);
  }

  calculateAverageStepGoal() {
    let totalStepGoal = 0;
    this.userData.forEach((user) => {
      totalStepGoal += user.dailyStepGoal;
    });
    return totalStepGoal / this.userData.length;
  }
}

export default UserRepository;
