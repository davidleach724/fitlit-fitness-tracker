// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/mosaic.png'
import './images/shoe-prints-solid.png'
import './images/walking-solid.png'
import './images/building-solid.png'
import './images/stopwatch-solid.png'

//console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file
import domUpdates from './domUpdates';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';
import Chart from 'chart.js/auto';



// DOM ELEMENTS
let userInfo = document.getElementById('userInfo');
let turingLogo = document.getElementById('turingLogo');

let todayActivity = document.getElementById('todayActivity');

let hydrationAvgDay = document.getElementById('hydrationAvgDay');
let hydrationAvgWeek = document.getElementById('hydrationAvgWeek');
let hydratationPerDayChart = document.getElementById('hydratationPerDayChart').getContext('2d');
let hydratationPerWeekChart = document.getElementById('hydratationPerWeekChart').getContext('2d');

let sleepHoursLastDay = document.getElementById('sleepHoursLastDay');
let sleepQualityLastDay = document.getElementById('sleepQualityLastDay');
let sleepHoursLastWeek = document.getElementById('sleepHoursLastWeek');
let sleepQualityLastWeek = document.getElementById('sleepQualityLastWeek');
let sleepHoursAllTime = document.getElementById('sleepHoursAllTime');
let sleepQualityAllTime = document.getElementById('sleepQualityAllTime');
let sleepHoursLastDayChart = document.getElementById('sleepHoursLastDayChart').getContext('2d');
let sleepQualityLastDayChart = document.getElementById('sleepQualityLastDayChart').getContext('2d');
let sleepHoursLastWeekChart = document.getElementById('sleepHoursLastWeekChart').getContext('2d');
let sleepQualityLastWeekChart = document.getElementById('sleepQualityLastWeekChart').getContext('2d');
let sleepHoursAllTimeChart = document.getElementById('sleepHoursAllTimeChart').getContext('2d');
let sleepQualityAllTimeChart = document.getElementById('sleepQualityAllTimeChart').getContext('2d');

let numStepsLastDay = document.getElementById('numStepsLastDay');
let numActiveLastDay = document.getElementById('numActiveLastDay');
let distanceWalkedLastDay = document.getElementById('distanceWalkedLastDay');
let numStepsWeek = document.getElementById('numStepsWeek');
let numActiveWeek = document.getElementById('numActiveWeek');
let numStarisClimbedWeek = document.getElementById('numStarisClimbedWeek');
let numStepsLastDayChart = document.getElementById('numStepsLastDayChart').getContext('2d');
let numActiveLastDayChart = document.getElementById('numActiveLastDayChart').getContext('2d');
let distanceWalkedLastDayChart = document.getElementById('distanceWalkedLastDayChart').getContext('2d');
let numStepsWeekChart = document.getElementById('numStepsWeekChart').getContext('2d');
let numActiveWeekChart = document.getElementById('numActiveWeekChart').getContext('2d');
let numStarisClimbedWeekChart = document.getElementById('numStarisClimbedWeekChart').getContext('2d');



// EVENT LISTENERS
turingLogo.addEventListener('click', showUserInfo);


// GLOBAL VARIABLES
let date = '2020/01/22'
let randomID, strideLength, stepGoal;

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
  strideLength = currentUser.strideLength;
  stepGoal = currentUser.dailyStepGoal;
  domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal);
};

const getHydrationData = (data) => {
  const hydrationData = new Hydration(data, randomID);
  const hydrationAverage = hydrationData.findHydrationAverage();
  const hydrationToday = hydrationData.findCurrentHydration(date);
  const hydrationWeek = hydrationData.findOuncesPerWeek();
  // domUpdates.displayHydrationPerDay(hydrationAvgDay, hydrationToday);
  // domUpdates.displayHydrationPerWeek(hydrationAvgWeek, hydrationWeek)


  // bar, horizontalBar, pie, line, doughnut, radar, ploarArea
  domUpdates.displayChartPerDay(hydratationPerDayChart, hydrationAvgDay,  hydrationAverage, hydrationToday, 'line', 'Hydration Today');
  domUpdates.displayChartPerWeek(hydratationPerWeekChart, hydrationAvgWeek, hydrationWeek.ounces, hydrationWeek.dates, 'bar', 'Hydration Per Week');


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
 // domUpdates.displaySleptHoursPerDay(sleepHoursLastDay, sleepHoursDate);
 // domUpdates.displaySleptQualityPerDay(sleepQualityLastDay, sleepQualityDate);
 // domUpdates.displaySleptHoursPerWeek(sleepHoursLastWeek, sleepHoursWeek);
 // domUpdates.displaySleptQualityPerWeek(sleepQualityLastWeek, sleepQualityWeek);
 // domUpdates.displaySleptHoursAll(sleepHoursAllTime, sleepHourAverage);
 // domUpdates.displaySleptQualityAll(sleepQualityAllTime, sleepQualityAverage);


// bar, horizontalBar, pie, line, doughnut, radar, ploarArea
domUpdates.displayChartPerDay(sleepHoursLastDayChart, sleepHoursLastDay,  sleepHourAverage, sleepHoursDate, 'bar', 'Slept Hours Today');
domUpdates.displayChartPerDay(sleepQualityLastDayChart, sleepQualityLastDay, sleepQualityAverage, sleepQualityDate, 'doughnut', 'Slept Quality Today');
domUpdates.displayChartPerWeek(sleepHoursLastWeekChart, sleepHoursLastDay,  sleepHoursWeek.hours, sleepHoursWeek.dates, 'bar', 'Slept Hours Per Week');
domUpdates.displayChartPerWeek(sleepQualityLastWeekChart, sleepQualityLastDay, sleepQualityWeek.quality, sleepQualityWeek.dates, 'line', 'Slept Quality Per Week');
domUpdates.displayChartPerDay(sleepHoursAllTimeChart, sleepHoursAllTime,  sleepHourAverage, sleepHoursDate, 'pie', 'Total Slept Hours');
domUpdates.displayChartPerDay(sleepQualityAllTimeChart, sleepQualityAllTime, sleepQualityAverage, sleepQualityDate, 'bar', 'Total Slept Quality');


//  console.log('sleep class: ', sleepData);
//  console.log('sleep hours for date: ', sleepHoursDate);
 // console.log('sleep quality for date: ', sleepQualityDate)
 // console.log('sleep week: ', sleepHoursWeek.hours);
 // console.log('sleep quality: ', sleepQualityWeek.quality);
//  console.log('sleep hour avg: ', sleepHourAverage);
//  console.log('sleep qual avg: ', sleepQualityAverage);
}

  const getActivityData = (data) => {
  const activityData = new Activity(data, randomID);
  const stepsDate = activityData.findUserSteps(date);
  const minutesDate = activityData.findUserMinutes(date);
  const stairsDate = activityData.findUserStairs(date);
  const milesWalked = activityData.calculateMilesWalked(strideLength, date);
  const averageStairsAllDate = activityData.findAverageStairsAll(date);
  const averageStepsAllDate = activityData.findAverageStepsAll(date);
  const averageMinutesAllDate = activityData.findAverageMinutesAll(date);
  const minutesWeek = activityData.findUserMinutesWeek();
  const stepsWeek = activityData.findUserStepsWeek();
  const stairsWeek = activityData.findUserStairsWeek();
  const goalMet = activityData.determineStepGoalMet(stepGoal, date);


  // bar, horizontalBar, pie, line, doughnut, radar, ploarArea
  domUpdates.displayTodaysData(todayActivity, date, stepsDate, stairsDate, minutesDate, milesWalked, goalMet);

  domUpdates.displayChartPerDay(numStepsLastDayChart, numStepsLastDayChart,  averageStepsAllDate, stepsDate, 'polarArea', 'Number steps from last date');
  domUpdates.displayChartPerDay(numActiveLastDayChart, numActiveLastDay, averageMinutesAllDate, minutesDate, 'doughnut', 'Number active from last date');
  domUpdates.displayChartPerDay(distanceWalkedLastDayChart, distanceWalkedLastDay, goalMet, milesWalked, 'line', 'Distance in miles from last date');
  domUpdates.displayChartPerWeek(numStepsWeekChart, numStepsWeek,  stepsWeek.steps, stepsWeek.dates, 'bar', 'Steps Per Week');
  domUpdates.displayChartPerWeek(numActiveWeekChart, numActiveWeek, minutesWeek.minutes, minutesWeek.dates, 'line', 'Minutes Active Per Week');
  domUpdates.displayChartPerWeek(numStarisClimbedWeekChart, numStarisClimbedWeek, stairsWeek.stairs, stairsWeek.dates, 'bar', 'Climbed stairs during the week');


  // console.log('steps:', stepsDate);
  // console.log('minutes: ', minutesDate);
  // console.log('stairs: ', stairsDate)
  // console.log('miles walked: ', milesWalked);
  // console.log('average stairs all: ', averageStairsAllDate);
  // console.log('average steps all: ', averageStepsAllDate);
  // console.log('average minutes all: ', averageMinutesAllDate);
  // console.log('minutes week: ', minutesWeek);
  // console.log('steps week: ', stepsWeek);
  // console.log('stairs week: ', stairsWeek);
  // console.log('stride length: ', strideLength);
  // console.log('Step goal: ', stepGoal);
  // console.log('Step goal met: ', goalMet);
}

function showUserInfo() {
  let userInfo = document.getElementById('userInfoDisplay');
  if(userInfo.classList.contains('hidden')) {
    userInfo.classList.remove('hidden');
    return
  }
  userInfo.classList.add('hidden');
}

const getRandomUser = (array) => {
  return Math.floor(Math.random() * array.length + 1);
};

callAllData('users');
callAllData('hydration');
callAllData('sleep');
callAllData('activity');
