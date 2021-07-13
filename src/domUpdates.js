let domUpdates = {
  displayUserInfo(userInfo, currentUser) {
    userInfo.innerHTML = '';
    userInfo.insertAdjacentHTML('beforebegin',
    `
    <div class='user-info-display' id='userInfoDisplay'>
      <h1>Hello ${currentUser.showFirstName()}!!</h1>
      <p class="user-name">${currentUser.name}</p>
      <p>${currentUser.email}</p>
      <p>${currentUser.address}</p>
      <p>${currentUser.strideLength}</p>
      <p>${currentUser.dailyStepGoal}</p>
      <p>${currentUser.friends}</p>
    </div>
    `)
  }
}

export default domUpdates;
