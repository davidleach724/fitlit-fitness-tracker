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
    hydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {

    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {

    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have a property to storage all the hydration data', function() {

    expect(hydration.hydrationInfo).to.be.equal(hydrationData);
  });

  it('should filter the data based on the user id', function() {

    expect(hydration.findUserHydration(1).length).to.be.equal(11)
  });

});
