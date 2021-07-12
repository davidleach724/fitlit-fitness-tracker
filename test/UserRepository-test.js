import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users';

describe('User Repository', () => {
  let userRepository;
  beforeEach(() => {
    userRepository = new UserRepository(userData);
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should compile all user data into an array', () => {
    expect(userRepository.userData).to.be.an('array');
  });

  it('should return a specific user by id', () => {
    expect(userRepository.getUserData(1)).to.equal(userData[0]);
  });

  it('should calculate average step goal for all users', () => {
    expect(userRepository.calculateAverageStepGoal()).to.equal(6700);
  })
});