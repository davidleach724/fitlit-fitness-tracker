// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

//console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';

const userRepository = new UserRepository(userData);

const getRandomUser = (array) => {
  return Math.floor(Math.random() * array.length);
}

const randomID = getRandomUser(userData);

console.log(userRepository.getUserData(randomID));

console.log(userRepository.calculateAverageStepGoal());
