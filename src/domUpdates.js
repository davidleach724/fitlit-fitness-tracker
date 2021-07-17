let domUpdates = {
  displayUserInfo(userInfo, currentUser) {
    userInfo.innerHTML = '';
    userInfo.insertAdjacentHTML('afterbegin',
    `
    <div class='user-info-display' id='userInfoDisplay'>
      <h1>Hello ${currentUser.showFirstName()}!!</h1
      <p class="user-name">${currentUser.name}</p>
      <p>${currentUser.email}</p>
      <p>${currentUser.address}</p>
      <p>${currentUser.strideLength}</p>
      <p>${currentUser.dailyStepGoal}</p>
      <p>${currentUser.friends}</p>
    </div>
    `)
  },
  displayHydrationPerDay(hydrationAvgDay, hydrationToday) {
    hydrationAvgDay.innerHTML = '';
    hydrationAvgDay.insertAdjacentHTML('afterbegin',
    `
    <div class='hydration-per-day' id='hydrationPerDay'>
    <h3>Water Today</h3>
    <p>${hydrationToday} oz</p>
    </div>
    `)
  },
  displayHydrationPerWeek(hydrationAvgWeek, hydrationWeek) {
    hydrationAvgWeek.innerHTML = '';
    hydrationAvgWeek.insertAdjacentHTML('afterbegin',
    `
    <div class='hydration-per-week' id='hydrationPerWeek'>
    <h3>Water This Week</h3>
    <p>Monday: ${hydrationWeek[0]} oz</p>
    <p>Tuesday: ${hydrationWeek[1]} oz</p>
    <p>Wednesday: ${hydrationWeek[2]} oz</p>
    <p>Thursday: ${hydrationWeek[3]} oz</p>
    <p>Friday: ${hydrationWeek[4]} oz</p>
    <p>Saturday: ${hydrationWeek[5]} oz</p>
    <p>Sunday: ${hydrationWeek[6]} oz</p>
    </div>
    `)
  },
  displaySleptHoursPerDay(sleepHoursLastDay, sleepHoursDate) {
    sleepHoursLastDay.innerHTML = '';
    sleepHoursLastDay.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-hours-per-day' id='sleptHoursPerDay'>
    <h3>Hours Slept</h3>
    <p>${sleepHoursDate} hrs</p>
    </div>
    `)
  },
  displaySleptQualityPerDay(sleepQualityLastDay, sleepQualityDate) {
    sleepQualityLastDay.innerHTML = '';
    sleepQualityLastDay.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-quality-per-day' id='sleptQualityPerDay'>
    <h3>Sleep Quality</h3>
    <p>${sleepQualityDate} </p>
    </div>
    `)
  },
  displaySleptHoursPerWeek(sleepHoursLastWeek, sleepHoursWeek) {
    sleepHoursLastWeek.innerHTML = '';
    sleepHoursLastWeek.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-hours-per-week' id='sleptHoursPerWeek'>
    <h3>The amount of hours slept for week is:</h3>
    <p>Monday: ${sleepHoursWeek[0]} hrs</p>
    <p>Tuesday: ${sleepHoursWeek[1]} hrs</p>
    <p>Wednesday: ${sleepHoursWeek[2]}hrs</p>
    <p>Thursday: ${sleepHoursWeek[3]} hrs</p>
    <p>Friday: ${sleepHoursWeek[4]} hrs</p>
    <p>Saturday: ${sleepHoursWeek[5]} hrs</p>
    <p>Sunday: ${sleepHoursWeek[6]} hrs</p>
    </div>
    `)
  },
  displaySleptQualityPerWeek(sleepQualityLastWeek, sleepQualityWeek) {
    sleepQualityLastWeek.innerHTML = '';
    sleepQualityLastWeek.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-quality-per-week' id='sleptQualityPerWeek'>
    <h3>The amount of quality slept for week is:</h3>
    <p>Monday: ${sleepQualityWeek[0]} </p>
    <p>Tuesday: ${sleepQualityWeek[1]} </p>
    <p>Wednesday: ${sleepQualityWeek[2]} </p>
    <p>Thursday: ${sleepQualityWeek[3]} </p>
    <p>Friday: ${sleepQualityWeek[4]} </p>
    <p>Saturday: ${sleepQualityWeek[5]} </p>
    <p>Sunday: ${sleepQualityWeek[6]} </p>
    </div>
    `)
  },
  displaySleptHoursAll(sleepHoursAllTime, sleepHourAverage) {
    sleepHoursAllTime.innerHTML = '';
    sleepHoursAllTime.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-hours-all' id='sleptHoursAll'>
    <h3>The average of your total slept hours is:</h3>
    <p>${sleepHourAverage} hrs</p>
    </div>
    `)
  },
  displaySleptQualityAll(sleepQualityAllTime, sleepQualityAverage) {
    sleepQualityAllTime.innerHTML = '';
    sleepQualityAllTime.insertAdjacentHTML('afterbegin',
    `
    <div class='slept-quality-all' id='sleptQualityAll'>
    <h3>The average of your total slept qualityis:</h3>
    <p>${sleepQualityAverage} </p>
    </div>
    `)
  }

};


export default domUpdates;
