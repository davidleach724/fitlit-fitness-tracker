const chai = require('chai');
const expect = chai.expect;

import Sleep from '../src/Sleep';
import sleepData from '../src/data/sleepData';


describe('Sleep', function() {
let sleep ;
  beforeEach(() =>  {
    sleep = new Sleep(sleepData, 1);
  });

  it('should be a function', function() {

    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {

    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a property to storage all the sleep data', function() {

    expect(sleep.sleepInfo).to.be.an(array);
  });

   it('should return how many hours they slept for a specific day', () => {

     expect(sleep.findCurrentSleepHours("2019/06/25")).to.equal(5.1);
   });

   it('should return their sleep quality for a specific day', () => {

     expect(sleep.findCurrentSleepQuality("2019/06/25")).to.equal(3.9);
   });

  it('should should return how many hours slept each day over the course of a week', function() {

    expect(sleep.findSleepWeek()).to.deep.equal([ 4.2, 8, 9.4, 8.4, 4, 7.5, 5.1 ])
  });

  it('should should return  their sleep quality each day over the course of a week', function() {

    expect(sleep.findSleepQualityWeek()).to.deep.equal([ 3.6, 2.9, 2.6, 3.5, 2.2, 1.6, 3.9 ])
  });

  it('should return the average number of hours slept per day', () => {

    expect(sleep.findSleepHourAverage()).to.equal(6);
  });

  it('should return their average sleep quality per day over all time', () => {

    expect(sleep.findSleepQualityAverage()).to.equal(3.17);
  });

  it('should return the average sleep quality over all time', () => {

    expect(sleep.findAllSleepQualityAverage()).to.equal(3.38);
  });

});
