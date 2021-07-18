const chai = require('chai');
const expect = chai.expect;

import Activity from '../src/Activity';
import activityData from '../src/data/activityData';

describe.only('Activity', () => {
  let activity;
  beforeEach(() => {
    activity = new Activity(activityData, 1);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('should return steps for a date', () => {
    expect(activity.findUserSteps('2019/06/19')).to.equal(8429)
  })

  it('should return miles walked based on stride length and steps', () => {
    expect(activity.calculateMilesWalked(4.3, '2019/06/19')).to.equal(6.86);
  })

  it('should return minutes active for a date', () => {
    expect(activity.findUserMinutes('2019/06/19')).to.equal(275);
  })

  it('should return active minutes in a week', () => {
    expect(activity.findUserMinutesWeek()).to.be.an('object');
  })

  it('should determine if the user has met their step goal', () => {
    expect(activity.determineStepGoalMet(10000, '2019/06/19')).to.equal(false);
    expect(activity.determineStepGoalMet(5000, '2019/06/19')).to.equal(true);
  })

  it('should return all dates step goal was met', () => {
    expect(activity.findMetStepGoalDays(10000)).to.be.an('array');
  })

  it('should find all-time stairs climbed record', () => {
    expect(activity.findHighStairRecord()).to.equal('2019/06/16')
  })

  it('should return the average stairs of all users for a date', () => {
    expect(activity.findAverageStairsAll('2019/06/19')).to.equal(14.2);
  })

  it('should return the average steps of all users for a date', () => { 
    expect(activity.findAverageStepsAll('2019/06/19')).to.equal(10322);
  })

  it('should return the average active minutes of all users for a date', () => {
    expect(activity.findAverageMinutesAll('2019/06/19')).to.equal(220);
  })

  it('should return a weeks worth of steps for a user', () => {
    expect(activity.findUserStepsWeek()).to.be.an('object');
  })

  it('should return a weeks worth of stairs for a user', () => {
    expect(activity.findUserStairsWeek()).to.be.an('object');
  })

})