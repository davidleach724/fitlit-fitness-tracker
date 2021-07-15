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
    <h3>The amount of water that you have cosumend today is:</h3>
    <p>${hydrationToday} oz</p>
    </div>
    `)
  },

  displayHydrationPerWeek(hydrationAvgWeek, hydrationWeek) {
    hydrationAvgWeek.innerHTML = '';
    hydrationAvgWeek.insertAdjacentHTML('afterbegin',
    `
    <div class='hydration-per-week' id='hydrationPerWeek'>
    <h3>The amount of water that you have cosumend during the week is:</h3>
    <p>Monday: ${hydrationWeek[0]} oz</p>
    <p>Tuesday: ${hydrationWeek[1]} oz</p>
    <p>Wednesday: ${hydrationWeek[2]} oz</p>
    <p>Thursday: ${hydrationWeek[3]} oz</p>
    <p>Friday: ${hydrationWeek[4]} oz</p>
    <p>Saturday: ${hydrationWeek[5]} oz</p>
    <p>Sunday: ${hydrationWeek[6]} oz</p>
    </div>
    `)
  }
};


export default domUpdates;
