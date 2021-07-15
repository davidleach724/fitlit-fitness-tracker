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
  };

  displayHydrationPerDay(hydrationInfo, hydrationToday) {
    hydrationInfo.innerHTML = '';
    hydrationInfo.insertAdjacentHTML('afterbegin',
    `
    <div class='hydration-per-day' id='hydrationPerDay'>
    <h3>The amount of water that you have cosumend today is:</h3>
    <p>${hydrationToday} oz</p>
    </div>
    `
    )
  };

  displayHydrationPerWeek(hydrationInfo, hydrationWeek) {
    hydrationInfo.innerHTML = '';
    hydrationInfo.insertAdjacentHTML('beforeend',
    `
    <div class='hydration-per-week' id='hydrationPerWeek'>
    <h3>The amount of water that you have cosumend during the week is:</h3>
    <p>${hydrationWeek} oz</p>
    </div>
    `
    )
  };
}

export default domUpdates;
