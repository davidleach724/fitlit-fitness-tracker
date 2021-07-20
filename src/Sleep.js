class Sleep {
  constructor(sleepInfo, currentID) {
    this.sleepInfo = sleepInfo.sleepData;
    this.currentUserID = currentID;
    this.currentUser = this.findUserSleep();
  }

  findUserSleep() {
    return this.sleepInfo.filter(user => user.userID === this.currentUserID);
  }

  findCurrentSleepHours(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).hoursSlept
  }

  findCurrentSleepQuality(date) {
    return this.currentUser.find((elem) => {
      return elem.date === date;
    }).sleepQuality
  }

  findSleepWeek() {
    let sleepHours = this.currentUser.slice(-7).map((info) => info.hoursSlept)
    let sleepDates = this.currentUser.slice(-7).map((info) => info.date)
    return {
      hours: sleepHours,
      dates: sleepDates,
    }
  }

  findSleepQualityWeek() {
    let sleepQuality = this.currentUser.slice(-7).map((info) => info.sleepQuality);
    let sleepDates = this.currentUser.slice(-7).map((info) => info.date)
    return {
      quality: sleepQuality,
      dates: sleepDates,
    }
  }

  findSleepHourAverage() {
    let totalSleepHour = this.currentUser.reduce((acc, elem) => {
      acc += elem.hoursSlept;
      return acc
    }, 0);
    return Math.round(totalSleepHour / this.currentUser.length);
  }

  findSleepQualityAverage() {
    let totalSleepQuality = this.currentUser.reduce((acc, elem) => {
      acc += elem.sleepQuality;
      return acc;
    }, 0);
    return parseFloat((totalSleepQuality / this.currentUser.length).toFixed(2));
  }

  findAllSleepQualityAverage() {
    let allUsersSleepQuality = this.sleepInfo.reduce((acc, elem) => {
      acc += elem.sleepQuality;
      return acc;
    }, 0);
    return parseFloat((allUsersSleepQuality / this.sleepInfo.length).toFixed(2));
  }
};

export default Sleep;
