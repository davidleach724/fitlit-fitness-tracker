// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

//console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

//import userData from './data/users';
import domUpdates from './domUpdates';
import UserRepository from './UserRepository';
import User from './User';

let userInfo = document.getElementById('userInfo');

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
  const randomID = getRandomUser(data.userData);
  const averageStepGoal = userRepository.calculateAverageStepGoal();
  const currentUser = new User(userRepository.getUserData(randomID));
  domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal);
};

const getHydrationData = (data) => {
  console.log('hydration', data.hydrationData);
}

const getSleepData = (data) => {
  console.log('sleep', data.sleepData);
}

const getActivityData = (data) => {
  console.log('activity', data.activityData);
}

const getRandomUser = (array) => {
  return Math.floor(Math.random() * array.length + 1);
};

callAllData('users');
callAllData('hydration');
callAllData('sleep');
callAllData('activity');

// const userRepository = new UserRepository(userData);

// const randomID = getRandomUser(userData);
// console.log(randomID);
// console.log(userRepository.getUserData(randomID));
// const averageStepGoal = userRepository.calculateAverageStepGoal();
// const ramdonUser = userRepository.getUserData(randomID)

// const currentUser = new User(userRepository.getUserData(randomID));
// console.log('currentUser', currentUser);

// domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal);
