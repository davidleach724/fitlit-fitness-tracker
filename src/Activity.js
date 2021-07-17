class Activity {
  constructor(activityInfo, currentID) {
    this.activityInfo = activityInfo;
    this.currentUserID = currentID;
    this.currentUser = this.findUserActivity();
  }

  findUserActivity() {
    return this.activityInfo.filter(user => user.userID === this.currentUserID);
  }

  // return steps for date
  findUserSteps(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).numSteps
  }

  // return miles based on steps and stridelength
  calculateMilesWalked(strideLength, date) {
    return parseFloat(((this.findUserSteps(date) * strideLength)/5280).toFixed(2));
  }

  // return active minutes for date
  findUserMinutes(date) {
    return this.currentUser.find(elem => (elem.date === date)).minutesActive;
  }

  // return average active minutes for week
  findUserMinutesWeek() {
    let minutesWeek = this.currentUser.slice(-7).map((info) => info.minutesActive)
    let dateWeek = this.currentUser.slice(-7).map(info => info.date)
    return {
      'minutes': minutesWeek,
      'dates': dateWeek
    }
  }

  // return if step goal was met for date
  determineStepGoalMet(stepGoal, date) {
    if (this.findUserSteps(date) >= stepGoal) {
      return true
    }
    return false
  }

  // return days step goal was met
  findMetStepGoalDays(stepGoal) {
    return this.currentUser.filter(user => user.numSteps >= stepGoal).map(user => user.date)
  }

  // find all-time stair record
  findHighStairRecord() {
    const sorted = this.currentUser.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sorted[0].date;
  }

  // return ALL USERS
    // average stairs for date
  findAverageStairsAll(date) {
    const activityDate = this.activityInfo.filter(user => user.date === date);
    const totalStairsDate = activityDate.reduce((acc, elem) => {
      acc += elem.flightsOfStairs
      return acc
    }, 0)
    return parseFloat((totalStairsDate/activityDate.length).toFixed(1))
  }
    // average steps for date
  findAverageStepsAll(date) {
    const activityDate = this.activityInfo.filter(user => user.date === date);
    const totalStepsDate = activityDate.reduce((acc, elem) => {
      acc += elem.numSteps
      return acc
    }, 0)
    return Math.floor(totalStepsDate/activityDate.length)
  }
    // average minutes for date
  findAverageMinutesAll(date) {
    const activityDate = this.activityInfo.filter(user => user.date === date);
    const totalMinutesDate = activityDate.reduce((acc, elem) => {
      acc += elem.minutesActive
      return acc
    }, 0)
    return Math.floor(totalMinutesDate/activityDate.length)
  }

  // return steps user vs. all users

  // return minutes user vs. all users
  
  // return stairs user vs. all users

  // return week step count

  // return week stairs

  // return week min active

}

export default Activity;