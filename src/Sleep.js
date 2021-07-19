class Sleep {
  constructor(sleepInfo, currentID) {
    this.sleepInfo = sleepInfo.sleepData;
    this.currentUserID = currentID;
    this.currentUser = this.findUserSleep();
  }
// returns array of user's sleep data
  findUserSleep() {
    return this.sleepInfo.filter(user => user.userID === this.currentUserID);
  }
// For a user, how many hours a user sleeps for a specific day
  findCurrentSleepHours(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).hoursSlept
  }
// For a user, their sleep quality for a specific day (identified by a date)
  findCurrentSleepQuality(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).sleepQuality
  }
// For a user, how many hours slept each day over the course of a given week (7 days)
  findSleepWeek() {
    let sleepHours = this.currentUser.slice(-7).map((info) => info.hoursSlept)
    let sleepDates = this.currentUser.slide(-7).map((info) => info.date)
    return {
      hours: sleepHours,
      dates: sleepDates,
    }
  }
// For a user, their sleep quality each day over the course of a given week (7 days)
  findSleepQualityWeek() {
    let sleepQuality = this.currentUser.slice(-7).map((info) => info.sleepQuality);
    let sleepDates = this.currentUser.slice(-7).map((info) => info.dates)
    return {
      quality: sleepQuality,
      dates: sleepDates,
    }
  }
//For a user, the average number of hours slept per day
  findSleepHourAverage() {
    let totalSleepHour = this.currentUser.reduce((acc, elem) => {
      acc += elem.hoursSlept;
      return acc
    }, 0);
    return Math.round(totalSleepHour / this.currentUser.length);
  }
//For a user, their average sleep quality per day over all time
  findSleepQualityAverage() {
    let totalSleepQuality = this.currentUser.reduce((acc, elem) => {
      acc += elem.sleepQuality;
      return acc;
    }, 0);
    return parseFloat((totalSleepQuality / this.currentUser.length).toFixed(2));
  }

// For all users, the average sleep quality
  findAllSleepQualityAverage() {
    let allUsersSleepQuality = this.sleepInfo.reduce((acc, elem) => {
      acc += elem.sleepQuality;
      return acc;
    }, 0);
    return parseFloat((allUsersSleepQuality / this.sleepInfo.length).toFixed(2));
  }
};

export default Sleep;
