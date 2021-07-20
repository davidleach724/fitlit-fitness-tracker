// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********


// Import CSS file
import './css/styles.css';

// Import Images
import './images/turing-logo.png';
import './images/mosaic.png'
import './images/shoe-prints-solid.png'
import './images/walking-solid.png'
import './images/building-solid.png'
import './images/stopwatch-solid.png'
import './images/bed-solid.png'
import './images/heartbeat-solid.png'

// Import from js files
import domUpdates from './domUpdates';
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';


// DOM ELEMENTS
let userInfo = document.getElementById('userInfo');
let turingLogo = document.getElementById('turingLogo');
let todayActivity = document.getElementById('todayActivity');
let hydrationAvgWeek = document.getElementById('hydrationAvgWeek');
let hydratationPerWeekChart = document.getElementById('hydratationPerWeekChart').getContext('2d');
let sleepToday = document.getElementById('todaySleep');
let sleepHoursLastDay = document.getElementById('sleepHoursLastDay');
let sleepQualityLastDay = document.getElementById('sleepQualityLastDay');
let sleepHoursLastWeekChart = document.getElementById('sleepHoursLastWeekChart').getContext('2d');
let sleepQualityLastWeekChart = document.getElementById('sleepQualityLastWeekChart').getContext('2d');
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
  const friendList = currentUser.determineFriends(userRepository.getUserNames());
  console.log(friendList);
  domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal, friendList);
};

const getHydrationData = (data) => {
  const hydrationData = new Hydration(data, randomID);
  const hydrationWeek = hydrationData.findOuncesPerWeek();

  domUpdates.displayChartPerWeek(hydratationPerWeekChart, hydrationAvgWeek, hydrationWeek.ounces, hydrationWeek.dates, 'bar', 'Hydration Per Week');
}

const getSleepData = (data) => {
  const sleepData = new Sleep(data, randomID);
  const sleepHoursDate = sleepData.findCurrentSleepHours(date);
  const sleepQualityDate = sleepData.findCurrentSleepQuality(date);
  const sleepHoursWeek = sleepData.findSleepWeek();
  const sleepQualityWeek = sleepData.findSleepQualityWeek()
  const sleepHourAverage = sleepData.findSleepHourAverage();
  const sleepQualityAverage = sleepData.findSleepQualityAverage();

  domUpdates.displaySleepData(sleepToday, date, sleepHoursDate, sleepQualityDate, sleepHourAverage, sleepQualityAverage);
  domUpdates.displayChartPerWeek(sleepHoursLastWeekChart, sleepHoursLastDay,  sleepHoursWeek.hours, sleepHoursWeek.dates, 'bar', 'Slept Hours Per Week');
  domUpdates.displayChartPerWeek(sleepQualityLastWeekChart, sleepQualityLastDay, sleepQualityWeek.quality, sleepQualityWeek.dates, 'line', 'Slept Quality Per Week');
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
  domUpdates.displayTodaysData(todayActivity, date, stepsDate, stairsDate, minutesDate, milesWalked, goalMet);
  domUpdates.displayChartPerWeek(numStepsWeekChart, numStepsWeek,  stepsWeek.steps, stepsWeek.dates, 'bar', 'Steps Per Week');
  domUpdates.displayChartPerWeek(numActiveWeekChart, numActiveWeek, minutesWeek.minutes, minutesWeek.dates, 'line', 'Minutes Active Per Week');
  domUpdates.displayChartPerWeek(numStarisClimbedWeekChart, numStarisClimbedWeek, stairsWeek.stairs, stairsWeek.dates, 'bar', 'Climbed stairs during the week');
  domUpdates.displayChartPerDay(numStepsLastDayChart, numStepsLastDayChart,  averageStepsAllDate, stepsDate, 'bar', 'Steps between current user and all users:', 'User Steps', 'Avg All Users');
  domUpdates.displayChartPerDay(numActiveLastDayChart, numActiveLastDay, averageMinutesAllDate, minutesDate, 'bar', 'Minutes active between current user and all users:', 'User Active Minutes', 'Avg All Users');
  domUpdates.displayChartPerDay(distanceWalkedLastDayChart, distanceWalkedLastDay, averageStairsAllDate, milesWalked, 'bar', 'Miles between current user and all users:', 'User Floors Climbed', 'Avg All Users');
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
