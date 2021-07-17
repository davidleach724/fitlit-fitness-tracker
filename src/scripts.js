// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

//console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import domUpdates from './domUpdates';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
// var Chart = require('chart.js');
// import Chart from 'chart.js/auto';
// var myChart = new Chart(ctx, {...});



// DOM ELEMENTS
let userInfo = document.getElementById('userInfo');

let hydrationAvgDay = document.getElementById('hydrationAvgDay');
let hydrationAvgWeek = document.getElementById('hydrationAvgWeek');
let hydartationPerWeekChart = document.getElementById('hydartationPerWeekChart').getContext('2d');

let sleepHoursLastDay = document.getElementById('sleepHoursLastDay');
let sleepQualityLastDay = document.getElementById('sleepQualityLastDay');
let sleepHoursLastWeek = document.getElementById('sleepHoursLastWeek');
let sleepQualityLastWeek = document.getElementById('sleepQualityLastWeek');
let sleepHoursAllTime = document.getElementById('sleepHoursAllTime');
let sleepQualityAllTime = document.getElementById('sleepQualityAllTime');




// EVENT LISTENERS



// GLOBAL VARIABLES
let date = '2020/01/22'
let randomID;

const callAllData = (file) => {
  fetch(`http://localhost:3001/api/v1/${file}`)
  .then((response) => response.json())
  .then((data) => {
    if (file === 'users') {getUserData(data);}
    if (file === 'hydration') {getHydrationData(data);}
    if (file === 'sleep') {getSleepData(data);}
    if (file === 'activity') {getActivityData(data);}
  });
}

const getUserData = (data) => {
  const userRepository = new UserRepository(data.userData);
  randomID = getRandomUser(data.userData);
  const averageStepGoal = userRepository.calculateAverageStepGoal();
  const currentUser = new User(userRepository.getUserData(randomID));
  domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal);
};

const getHydrationData = (data) => {
  const hydrationData = new Hydration(data, randomID);
  const hydrationAverage = hydrationData.findHydrationAverage();
  const hydrationToday = hydrationData.findCurrentHydration(date);
  const hydrationWeek = hydrationData.findOuncesPerWeek();
  domUpdates.displayHydrationPerDay(hydrationAvgDay, hydrationToday);
  domUpdates.displayHydrationPerWeek(hydrationAvgWeek, hydrationWeek, hydartationPerWeekChart);
  // TEST chart.js
  // hydrationAvgWeek = ' ';
  // let hydrationWeekChart = new Chart(myChart, {
    //   type: 'bar',// bar, horizontalBar, pie, line, doughnut, radar, ploarArea
    //   data: {
      //     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      //     datasets: [{
        //       label: 'Hydration Per Week',
        //       data: [
          //         hydrationWeek[0],
          //         hydrationWeek[1],
          //         hydrationWeek[2],
          //         hydrationWeek[3],
          //         hydrationWeek[4],
          //         hydrationWeek[5],
          //         hydrationWeek[6]
          //       ]
          //     }]
          //   },
          //   options: {}
          // })
  ////////////////
  // console.log('hydration data: ', hydrationData);
  // console.log('hydration avg: ', hydrationAverage);
  // console.log('hydration today: ', hydrationToday);
  // console.log('hydration week: ', hydrationWeek);
}

const getSleepData = (data) => {
 const sleepData = new Sleep(data, randomID);
 const sleepHoursDate = sleepData.findCurrentSleepHours(date);
 const sleepQualityDate = sleepData.findCurrentSleepQuality(date);
 const sleepHoursWeek = sleepData.findSleepWeek();
 const sleepQualityWeek = sleepData.findSleepQualityWeek()
 const sleepHourAverage = sleepData.findSleepHourAverage();
 const sleepQualityAverage = sleepData.findSleepQualityAverage();
 domUpdates.displaySleptHoursPerDay(sleepHoursLastDay, sleepHoursDate);
 domUpdates.displaySleptQualityPerDay(sleepQualityLastDay, sleepQualityDate);
 domUpdates.displaySleptHoursPerWeek(sleepHoursLastWeek, sleepHoursWeek);
 domUpdates.displaySleptQualityPerWeek(sleepQualityLastWeek, sleepQualityWeek);
 domUpdates.displaySleptHoursAll(sleepHoursAllTime, sleepHourAverage);
 domUpdates.displaySleptQualityAll(sleepQualityAllTime, sleepQualityAverage);
//  console.log('sleep class: ', sleepData);
//  console.log('sleep hours for date: ', sleepHoursDate);
//  console.log('sleep quality for date: ', sleepQualityDate)
//  console.log('sleep week: ', sleepHoursWeek);
//  console.log('sleep hour avg: ', sleepHourAverage);
//  console.log('sleep qual avg: ', sleepQualityAverage);
}

const getActivityData = (data) => {
 // console.log('activity', data.activityData);
}

const getRandomUser = (array) => {
  return Math.floor(Math.random() * array.length + 1);
};

callAllData('users');
callAllData('hydration');
callAllData('sleep');
callAllData('activity');
