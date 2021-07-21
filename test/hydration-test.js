const chai = require('chai');
const expect = chai.expect;

import Hydration from '../src/Hydration';
import User from '../src/User';
import UserRepository from '../src/UserRepository';
import hydrationData from '../src/data/hydrationData';
import userData from '../src/data/users';

describe('Hydration', function() {
let hydration ;
  beforeEach(() =>  {
    hydration = new Hydration(hydrationData, 1);
  });

  it('should be a function', function() {

    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {

    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have a property to storage all the hydration data', function() {
    expect(hydration.hydrationInfo).to.be.an('array');
  });

  it('should return average oz per day', () => {

     expect(hydration.findHydrationAverage()).to.equal(65);
   })

   it('should return todays current oz', () => {

     expect(hydration.findCurrentHydration("2019/06/25")).to.equal(51);
   })

  it('should should return how many ounces consumed per week', function() {

    expect(hydration.findOuncesPerWeek(1).ounces).to.deep.equal([ 42, 87, 94, 84, 39, 75, 51 ])
  });

});
