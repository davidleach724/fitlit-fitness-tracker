class Activity {
  constructor(activityInfo, currentID) {
    this.activityInfo = activityInfo.activityData;
    this.currentUserID = currentID;
    this.currentUser = this.findUserActivity();
  }

  findUserActivity() {
    return this.activityInfo.filter(
      (user) => user.userID === this.currentUserID
    );
  }

  findUserSteps(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).numSteps;
  }

  calculateMilesWalked(strideLength, date) {
    return parseFloat(
      ((this.findUserSteps(date) * strideLength) / 5280).toFixed(2)
    );
  }

  findUserMinutes(date) {
    return this.currentUser.find((elem) => elem.date === date).minutesActive;
  }

  findUserStairs(date) {
    return this.currentUser.find((elem) => elem.date === date).flightsOfStairs;
  }

  findUserMinutesWeek() {
    let minutesWeek = this.currentUser
      .slice(-7)
      .map((info) => info.minutesActive);
    let dateWeek = this.currentUser.slice(-7).map((info) => info.date);
    return {
      minutes: minutesWeek,
      dates: dateWeek,
    };
  }

  determineStepGoalMet(stepGoal, date) {
    this.findUserSteps(date)
    if (this.findUserSteps(date) >= stepGoal) {
      return `Nice! You met your step goal for today!`;
    }
    return `You need ${stepGoal - this.findUserSteps(date)} more steps to complete your goal, keep it up!`;
  }

  findMetStepGoalDays(stepGoal) {
    return this.currentUser
      .filter((user) => user.numSteps >= stepGoal)
      .map((user) => user.date);
  }

  findHighStairRecord() {
    const sorted = this.currentUser.sort(
      (a, b) => b.flightsOfStairs - a.flightsOfStairs
    );
    return sorted[0].date;
  }

  findAverageStairsAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalStairsDate = activityDate.reduce((acc, elem) => {
      acc += elem.flightsOfStairs;
      return acc;
    }, 0);
    return parseFloat((totalStairsDate / activityDate.length).toFixed(1));
  }

  findAverageStepsAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalStepsDate = activityDate.reduce((acc, elem) => {
      acc += elem.numSteps;
      return acc;
    }, 0);
    return Math.floor(totalStepsDate / activityDate.length);
  }

  findAverageMinutesAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalMinutesDate = activityDate.reduce((acc, elem) => {
      acc += elem.minutesActive;
      return acc;
    }, 0);
    return Math.floor(totalMinutesDate / activityDate.length);
  }

  findUserStepsWeek() {
    let stepsWeek = this.currentUser.slice(-7).map((info) => info.numSteps);
    let dateWeek = this.currentUser.slice(-7).map((info) => info.date);
    return {
      steps: stepsWeek,
      dates: dateWeek,
    };
  }

  findUserStairsWeek() {
    let stairsWeek = this.currentUser
      .slice(-7)
      .map((info) => info.flightsOfStairs);
    let dateWeek = this.currentUser.slice(-7).map((info) => info.date);
    return {
      stairs: stairsWeek,
      dates: dateWeek,
    };
  }
}

export default Activity;
