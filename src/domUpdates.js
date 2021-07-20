import Chart from 'chart.js/auto';
let domUpdates = {
  displayUserInfo(userInfo, currentUser, averageStepGoal, friendList) {
    userInfo.innerHTML = '';
    userInfo.insertAdjacentHTML('afterbegin',
    `
    <div class='user-greeting-display' id='userGreetingDisplay'>
      <h1 id="greeting">${currentUser.determineTimeOfDay()} ${currentUser.showFirstName()}!</h1
    </div>
    <div class='user-info-display hidden' id='userInfoDisplay'>
     <p>Full Name: ${currentUser.name}</p>
     <p>Email: ${currentUser.email}</p>
     <p>Address: ${currentUser.address}</p>
     <p>Stride Length: ${currentUser.strideLength} feet</p>
     <p>Daily Step Goal: ${currentUser.dailyStepGoal} steps (average step goal is ${averageStepGoal})</p>
     <p>Number of Friends: ${currentUser.friends.length}</p>
     <p>Friends: ${friendList.join(', ')}</p>
    </div>
    `)
  },

  displayTodaysData(todayActivity, date, steps, floors, minActive, miles, stepGoal) {
    todayActivity.innerHTML = '';
    todayActivity.insertAdjacentHTML('afterbegin',
    `
    <div class='user-activity-date' id='userActivityDate'>
      <h3>Activity For Today, ${date}</h3>

      <p><img src="./images/shoe-prints-solid.png" alt="steps icon" height="30px" width="30px">  ${steps} Steps</p>
      <p><img src="./images/building-solid.png" alt="building icon" height="30px" width="25px">  ${floors} Floors</p>
      <p><img src="./images/stopwatch-solid.png" alt="clock icon" height="30px" width="25px">  ${minActive} Min. Active</p>
      <p><img src="./images/walking-solid.png" alt="active icon" height="30px" width="25px">  ${miles} Miles</p>
      <p>${stepGoal}</p>
    </div>
    `
    )
  },

  displaySleepData(sleepToday, date, dateHours, dateQuality, averageHours, averageQuality) {
    sleepToday.innerHTML = '';
    sleepToday.insertAdjacentHTML('afterbegin',
    `
    <div class='user-sleep-card' id='userSleepCard'>
      <h3>Sleep Data for ${date}</h3>
      <p>${dateHours} Hours</p>
      <p>${dateQuality} Quality</p>
      <p class="sleep-icons"><img src='./images/bed-solid.png' alt="bed icon" height="30px" width="35px">
      <img src='./images/heartbeat-solid.png' alt="heart icon" height="30px" width="30px"></p>
      <h3>All-Time Sleep Averages</h3>
      <p>  ${averageHours} Hours</p>
      <p>${averageQuality} Quality</p>
    </div>
    `
    )
  },
  
  displayChartPerDay(chartSection, htmlSection, totalDataInfo, dataInfo, chartStyle, dataType, userInfo, totalInfo) {
    let dataInfoChart = new Chart(chartSection, {
      type: chartStyle,
      data: {
        labels: [userInfo, totalInfo],
        datasets: [{
          label: dataType,
          data: [
            dataInfo,
            totalDataInfo,
          ],
          backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(35, 79, 130, 0.6)'
          ],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 5,
          hoverBorderColor: '#fff'
        }]
      },
      options: {
        title: {
          display: false,
          text: 'Hydration Average Per Today Information:',
          fontSize: 25
        },
        plugins: {
          legend: {
            display: false,
            position: 'bottom'
          }
        }
        }
      })
    },

  displayChartPerWeek(chartSection, htmlSection, dataInfo, dateInfo, chartStyle, dataType) {
    let dataInfoChart = new Chart(chartSection, {
      text: 'This is a test',
      type: chartStyle,
      data: {
        labels: [
          dateInfo[0],
          dateInfo[1],
          dateInfo[2],
          dateInfo[3],
          dateInfo[4],
          dateInfo[5],
          dateInfo[6]
        ],
        datasets: [{
          label: dataType,
          data: [
            dataInfo[0],
            dataInfo[1],
            dataInfo[2],
            dataInfo[3],
            dataInfo[4],
            dataInfo[5],
            dataInfo[6]
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(35, 79, 130, 0.6)',
            'rgba(255, 89, 129, 0.6)',
            'rgba(75, 99, 132, 0.6)',
            'rgba(155, 91, 122, 0.6)',
            'rgba(255, 99, 112, 0.6)',
            'rgba(201, 90, 102, 0.6)'
          ],
          borderWidth: 2,
          borderColor: '#777',
          hoverBorderWidth: 7,
          hoverBorderColor: '#fff'
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Hydration Average Per Week Information:',
          fontSize: 25
        },
        plugins: {
          legend: {
            display: false,
            position: 'right',
          }
        }
      }
    })
  }

};

export default domUpdates;