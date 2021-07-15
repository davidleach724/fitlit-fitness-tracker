const chai = require('chai');
const expect = chai.expect;

import Sleep from '../src/Sleep';
import sleepData from '../src/data/hydrationData';


describe('Hydration', function() {
let sleep ;
  beforeEach(() =>  {
    sleep = new Hydration(sleepData, 1);
  });

  it('should be a function', function() {

    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {

    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a property to storage all the hydration data', function() {

    expect(hydration.hydrationInfo).to.be.equal(hydrationData);
  });

  it('should return average oz per day', () => {

     expect(hydration.findHydrationAverage()).to.equal(65);
   })

   it('should return todays current oz', () => {

     expect(hydration.findCurrentHydration("2019/06/25")).to.equal(51);
   })

  it('should should return how many ounces consumed per week', function() {

    expect(hydration.findOuncesPerWeek(1)).to.deep.equal([ 42, 87, 94, 84, 39, 75, 51 ])
  });

});
