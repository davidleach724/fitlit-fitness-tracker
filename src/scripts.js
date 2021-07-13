// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import domUpdates from './domUpdates';
import UserRepository from './UserRepository';
import User from './User';

let userInfo = document.getElementById('userInfo');


const userRepository = new UserRepository(userData);

const getRandomUser = (array) => {
  let num = Math.floor(Math.random() * array.length);
  if(num === 0) {
    getRandomUser(array);
  }
  return num;
}

const randomID = getRandomUser(userData);
console.log(randomID);
// console.log(userRepository.getUserData(randomID));
const averageStepGoal = userRepository.calculateAverageStepGoal();
// const ramdonUser = userRepository.getUserData(randomID)

const currentUser = new User(userRepository.getUserData(randomID));
console.log('currentUser', currentUser);

domUpdates.displayUserInfo(userInfo, currentUser, averageStepGoal);
