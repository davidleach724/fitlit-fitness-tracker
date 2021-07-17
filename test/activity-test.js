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
    // user 1 stridelength 4.3
    // sl * steps = 36244.7
    //feet in mile = 5280
    //6.86 miles
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
})