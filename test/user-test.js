const chai = require('chai');
const expect = chai.expect;

import User from '../src/User';

describe('User', function() {
  let currentUser;
  beforeEach(() =>  {
    currentUser = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    });
  });

  it('should be a function', function() {

    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {

    expect(currentUser).to.be.an.instanceof(User);
  });

  it('should store the id of the user', function() {

    expect(currentUser.id).to.equal(2);
  });

  it('should store the name of the user', function() {

    expect(currentUser.name).to.equal('Jarvis Considine');
  });

  it('should store the address of the user', function() {

    expect(currentUser.address).to.deep.equal("30086 Kathryn Port, Ciceroland NE 07273");
  });

  it('should store the email of the user', function() {

    expect(currentUser.email).to.deep.equal("Dimitri.Bechtelar11@gmail.com");
  });

  it('should store the stride of the legth step', function() {

    expect(currentUser.strideLength).to.deep.equal(4.5);
  });

  it('should store the daily step goals from the user', function() {

    expect(currentUser.dailyStepGoal).to.deep.equal(5000);
  });

  it('should store the friends of the user', function() {

    expect(currentUser.friends).to.deep.equal([9,18, 24, 19]);
  });

  it('should return  the users first name', function() {

    expect(currentUser.showFirstName()).to.equal('Jarvis');
  });

});
