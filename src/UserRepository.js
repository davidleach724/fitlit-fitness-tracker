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

  getUserNames() {
    let nameList = this.userData.reduce((arr, user) => {
      arr.push(user.name)
      return arr
    }, [])
    let userIdList = this.userData.reduce((arr, user) => {
      arr.push(user.id)
      return arr
    }, [])
    return {
      userName: nameList,
      userID: userIdList
    }
  }
}

export default UserRepository;
