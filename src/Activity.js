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

  // return steps for date
  findUserSteps(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).numSteps;
  }

  // return miles based on steps and stridelength
  // user 1 stridelength 4.3
  // sl * steps = 36244.7
  // feet in mile = 5280
  // 6.86 miles
  calculateMilesWalked(strideLength, date) {
    return parseFloat(
      ((this.findUserSteps(date) * strideLength) / 5280).toFixed(2)
    );
  }

  // return active minutes for date
  findUserMinutes(date) {
    return this.currentUser.find((elem) => elem.date === date).minutesActive;
  }

  // return stairs for date
  findUserStairs(date) {
    return this.currentUser.find((elem) => elem.date === date).flightsOfStairs;
  }

  // return average active minutes for week
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

  // return if step goal was met for date
  determineStepGoalMet(stepGoal, date) {
    this.findUserSteps(date)
    if (this.findUserSteps(date) >= stepGoal) {
      return `Nice! You met your step goal for today!`;
    }
    return `You need ${stepGoal - this.findUserSteps(date)} more steps to complete your goal, keep it up!`;
  }

  // return days step goal was met
  findMetStepGoalDays(stepGoal) {
    return this.currentUser
      .filter((user) => user.numSteps >= stepGoal)
      .map((user) => user.date);
  }

  // find all-time stair record
  findHighStairRecord() {
    const sorted = this.currentUser.sort(
      (a, b) => b.flightsOfStairs - a.flightsOfStairs
    );
    return sorted[0].date;
  }

  // return ALL USERS
  // average stairs for date
  findAverageStairsAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalStairsDate = activityDate.reduce((acc, elem) => {
      acc += elem.flightsOfStairs;
      return acc;
    }, 0);
    return parseFloat((totalStairsDate / activityDate.length).toFixed(1));
  }
  // average steps for date
  findAverageStepsAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalStepsDate = activityDate.reduce((acc, elem) => {
      acc += elem.numSteps;
      return acc;
    }, 0);
    return Math.floor(totalStepsDate / activityDate.length);
  }
  // average minutes for date
  findAverageMinutesAll(date) {
    const activityDate = this.activityInfo.filter((user) => user.date === date);
    const totalMinutesDate = activityDate.reduce((acc, elem) => {
      acc += elem.minutesActive;
      return acc;
    }, 0);
    return Math.floor(totalMinutesDate / activityDate.length);
  }

  // return week step count
  findUserStepsWeek() {
    let stepsWeek = this.currentUser.slice(-7).map((info) => info.numSteps);
    let dateWeek = this.currentUser.slice(-7).map((info) => info.date);
    return {
      steps: stepsWeek,
      dates: dateWeek,
    };
  }

  // return week stairs
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
